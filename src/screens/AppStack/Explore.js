import {
  View,
  Text,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  TextInput,
} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const Explore = () => {
  const newData3 = [
    {
      Id: 0,
      image: require('../../assets/vickyhairsalon.jpg'),
      shop: 'Vicky’s hair saloon',
      location: 'Block P Phase 2 Johar Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 1,
      image: require('../../assets/downTown.jpeg'),
      shop: 'Downtown hair saloon',
      location: '871-R1, Johar Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 2,
      image: require('../../assets/barberCompany.jpeg'),
      shop: 'The Barber Company | TBC',
      location: 'Wapda, 391, D3, town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Close',
    },
    {
      id: 3,
      image: require('../../assets/masterCuts.jpeg'),
      shop: 'Master Cuts',
      location: 'Kashmir Block Allama Iqbal Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 4,
      image: require('../../assets/HaiderSalon.jpeg'),
      shop: 'Haider Salon',
      location: 'Township Block 3 Twp Sector C 1 Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Close',
    },
    {
      id: 5,
      image: require('../../assets/mrCuts.jpeg'),
      shop: 'Mr Cut Hair Saloon',
      location: 'Block F Pia Housing Scheme, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      Id: 0,
      image: require('../../assets/vickyhairsalon.jpg'),
      shop: 'Vicky’s hair saloon',
      location: 'Block P Phase 2 Johar Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 1,
      image: require('../../assets/downTown.jpeg'),
      shop: 'Downtown hair saloon',
      location: '871-R1, Johar Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 2,
      image: require('../../assets/barberCompany.jpeg'),
      shop: 'The Barber Company | TBC',
      location: 'Wapda, 391, D3, town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Close',
    },
    {
      id: 3,
      image: require('../../assets/masterCuts.jpeg'),
      shop: 'Master Cuts',
      location: 'Kashmir Block Allama Iqbal Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 4,
      image: require('../../assets/HaiderSalon.jpeg'),
      shop: 'Haider Salon',
      location: 'Township Block 3 Twp Sector C 1 Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Close',
    },
    {
      id: 5,
      image: require('../../assets/mrCuts.jpeg'),
      shop: 'Mr Cut Hair Saloon',
      location: 'Block F Pia Housing Scheme, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
  ];
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredData, setFilteredData] = React.useState(newData3);
  const handleSearch = text => {
    setSearchQuery(text);
    const filtered = newData3.filter(item =>
      item.shop.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  return (
    <View
      contentContainerStyle={{
        marginTop: Platform.OS === 'ios' ? 50 : 30,
        flexGrow: 1,
        // backgroundColor: '#F5F5F5',
        marginHorizontal: '3%',
        paddingBottom: 80,
      }}>
      <View
        style={{
          marginTop: '15%',
          height: 50,
          width: '100%',
          backgroundColor: '#FFFFFF',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 28,
            color: '#0D1230',
            fontWeight: '600',
            marginLeft: 5,
          }}>
          Explore
        </Text>
        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            marginRight: 10,
            justifyContent: 'center',
            borderRadius: 12,
            elevation: 6,
          }}>
          <Image
            source={require('../../assets/settingIcon.png')}
            style={{
              height: 24,
              width: 24,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 60,
          width: '97%',
          alignSelf: 'center',
          alignItems: 'center',
          // alignContent: 'center',
          // backgroundColor: 'white',
          marginTop: 10,
          borderRadius: 10,
        }}>
        <Image
          source={require('../../assets/searchIcon2.png')}
          style={{
            height: 16,
            width: 16,
            marginLeft: 5,
            // backgroundColor: 'black',
          }}
        />
        <TextInput
          style={{
            width: '85%',
            height: 40,
            marginLeft: 7,
            fontSize: 12,
            color: '#000',
            backgroundColor:'white',
          }}
          placeholder="Search Salon Specialist..."
          placeholderTextColor={'#000'}
          value={searchQuery}
          onChangeText={text => handleSearch(text)}
        />
        <Image
          source={require('../../assets/icons5.png')}
          style={{
            height: 16,
            width: 16,
            marginRight: 5,
          }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: '30%',
          paddingHorizontal: 3,
          marginTop: 5,
        }}>
        <View style={{borderRadius: 15}}>
          {filteredData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                marginVertical: 5,
                // elevation: 5,
              }}>
              <ImageBackground
                source={item.image}
                imageStyle={{borderRadius: 15}}
                style={{
                  height: 180,
                  // elevation: 5,
                  width: '100%',
                  // shadowColor: '#808080',
                  // shadowOpacity: 10,
                  // shadowOffset: {
                  //   width: 4,
                  //   height: 5,
                  // },
                }}>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 19,
                      color: 'white',
                      fontWeight: '700',
                      // elevation: 5,
                      // shadowOpacity: 10,
                      // shadowOffset: {
                      //   width: 4,
                      //   height: 5,
                      // },
                    }}>
                    {item.shop}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#FAFAFA',
                    }}>
                    {item.location}
                  </Text>
                  <View
                    style={{
                      width: 50,
                      height: 20,
                      backgroundColor:
                        item.status === 'Close' ? 'red' : 'green',
                      borderRadius: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: '#fff',
                      }}>
                      {item.status}
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Explore;
