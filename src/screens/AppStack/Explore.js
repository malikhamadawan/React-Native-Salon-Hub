import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

/** component */
import {Input} from '../../components/input';

const Explore = () => {
  
  /** list */
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
  
  /** state */
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredData, setFilteredData] = React.useState(newData3);
  /** search function */
  const handleSearch = text => {
    setSearchQuery(text);
    const filtered = newData3?.filter(item =>
      item?.shop?.toLowerCase()?.includes(text?.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  return (
    <View
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 80,
        marginHorizontal: '3%',
        marginTop: Platform.OS === 'ios' ? 50 : 30,
      }}>
      <View
        style={{
          height: 50,
          width: '100%',
          borderRadius: 10,
          marginTop: '15%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 28,
            marginLeft: 5,
            color: '#0D1230',
            fontWeight: '600',
          }}>
          Explore
        </Text>
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            elevation: 6,
            marginRight: 10,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
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
          height: 60,
          width: '100%',
          marginTop: 10,
          borderRadius: 10,
        }}>
        <Input
          leftIcon={true}
          rightIcon={true}
          value={searchQuery}
          placeholderTextColor={'#000'}
          placeholder="Search Salon Specialist..."
          img2={require('../../assets/icons5.png')}
          onChangeText={text => handleSearch(text)}
          img={require('../../assets/searchIcon2.png')}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 5,
          paddingBottom: '30%',
          paddingHorizontal: 3,
        }}>
        <View style={{borderRadius: 15}}>
          {filteredData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                marginVertical: 5,
              }}>
              <ImageBackground
                source={item.image}
                imageStyle={{borderRadius: 15}}
                style={{
                  height: 180,
                  width: '100%',
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
                      borderRadius: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor:
                        item.status === 'Close' ? 'red' : 'green',
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
