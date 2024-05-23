import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

const NewScreen2 = () => {
  const [people, setPeople] = useState([]);
  let [state, setState] = useState([
    {
      id: 0,
      name: 'talha',
      detail: 'good boy',
      color: 'green',
    },
    {
      id: 1,
      name: 'hammad',
      detail: 'bad boy',
    },
  ]);
  // setState([
  //   ...state.externalEvents,
  //   {name: 'hasssan', detail: 'hello', color: 'red'},
  // ]);

  // setState({
  //   ...state,
  //   externalEvents: [...state.externalEvents, {name, detail, color}],
  // });

  // let updatedPeople = people.map(person => {
  //   let updatedName =
  //     person.name.charAt(0).toUpperCase() + person.name.slice(1);
  //   return {
  //     ...person,
  //     name: updatedName,
  //   };
  // });
  // people = updatedPeople;
  // console.log('people', people);

  // let umair = 'hammad';
  // console.log('people', people[0].detail);
  // console.log('people', people[1].detail);
  // console.log('people', Object.keys(people[1]));

  // console.log('people', people[0].name.replace('talha', 'Talha'));
  // console.log('people', people[1].name.replace('hammad', 'Hammad'));
  // console.log('umair', umair.slice(0, 4).toUpperCase());
  // console.log('umair', umair.charAt(0).toUpperCase()+umair.slice(1,6));

  // let search = [1, 2, 3, 4];
  // console.log(
  //   'search',`
  //   search.push(5),
  //   search.unshift(5),
  //   search.splice(3, 0, 5,),
  //   search,
  // );
  // console.log('search', search.copyWithin(0,3));

  setState(state?.push({id: 2, name: 'Jean', detail: 'hello', color: 'red'}));

  console.log(state);

  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 30,
        flex: 1,
        marginHorizontal: 5,
      }}>
      <FlatList
        data={state}
        renderItem={({item}) => (
          <View
            style={{
              height: 200,
              width: '100%',
              backgroundColor: 'red',
            }}>
            <Text
              style={{
                marginTop: 10,
                marginLeft: 10,
                fontSize: 15,
                color: 'black',
              }}>
              {item}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default NewScreen2;
