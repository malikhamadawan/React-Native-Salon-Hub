import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Input} from '../../components/input';

const Explore = ({navigation}) => {
  const newData3 = [
    {
      id: 0,
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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Explore</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Image
            source={require('../../assets/settingIcon.png')}
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Input
          leftIcon
          rightIcon
          value={searchQuery}
          placeholderTextColor="#000"
          placeholder="Search Salon Specialist..."
          img2={require('../../assets/icons5.png')}
          onChangeText={handleSearch}
          img={require('../../assets/searchIcon2.png')}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.listContainer}>
          {filteredData.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AppStack', {screen: 'ShopDetail'});
              }}
              key={index}
              style={styles.listItem}>
              <ImageBackground
                source={item.image}
                imageStyle={styles.listItemImage}
                style={styles.listItemImageBackground}>
                <View style={styles.listItemTextContainer}>
                  <Text style={styles.listItemShop}>{item.shop}</Text>
                  <Text style={styles.listItemLocation}>{item.location}</Text>
                  <View
                    style={[
                      styles.statusContainer,
                      {
                        backgroundColor:
                          item.status === 'Close' ? 'red' : 'green',
                      },
                    ]}>
                    <Text style={styles.statusText}>{item.status}</Text>
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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 80,
    marginHorizontal: '3%',
    marginTop: Platform.OS === 'ios' ? 50 : 30,
  },
  headerContainer: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    // marginTop: '15%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 28,
    marginLeft: 5,
    color: '#0D1230',
    fontWeight: '600',
  },
  settingsButton: {
    width: 35,
    height: 35,
    elevation: 6,
    marginRight: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  settingsIcon: {
    height: 24,
    width: 24,
  },
  searchContainer: {
    height: 60,
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
  },
  scrollViewContent: {
    marginTop: 5,
    paddingBottom: '30%',
    paddingHorizontal: 3,
  },
  listContainer: {
    borderRadius: 15,
  },
  listItem: {
    marginVertical: 5,
  },
  listItemImage: {
    borderRadius: 15,
  },
  listItemImageBackground: {
    height: 180,
    width: '100%',
  },
  listItemTextContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  listItemShop: {
    fontSize: 19,
    color: 'white',
    fontWeight: '700',
  },
  listItemLocation: {
    fontSize: 15,
    color: '#FAFAFA',
  },
  statusContainer: {
    width: 50,
    height: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    fontSize: 13,
    color: '#fff',
  },
});

export default Explore;
