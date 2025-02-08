import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  imageUri: null,
};

const profileImageupdate = createSlice({
  name: 'profileImageupdate',
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.imageUri = action.payload;
      AsyncStorage.setItem('profileImage', action.payload); // Save to AsyncStorage
    },
    clearImage: state => {
      state.imageUri = null;
      AsyncStorage.removeItem('profileImage'); // Remove from AsyncStorage
    },
    setImageFromStorage: (state, action) => {
      state.imageUri = action.payload; // Load from storage
    },
  },
});

// Export slice actions
export const {setImage, clearImage, setImageFromStorage} =
  profileImageupdate.actions;

// **Fix: Add `loadProfileImage` function and export it separately**
export const loadProfileImage = () => async dispatch => {
  try {
    const storedImageUri = await AsyncStorage.getItem('profileImage');
    if (storedImageUri) {
      dispatch(setImageFromStorage(storedImageUri));
    }
  } catch (error) {
    console.log('Error loading image from storage:', error);
  }
};

export default profileImageupdate.reducer;
