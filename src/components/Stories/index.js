import React from 'react';
import {View, FlatList} from 'react-native';
import Story from '../Story';

const data = [
  {
    imageUri: 'https://i.pravatar.cc/300',
    name: 'Ben',
    id: 1,
  },

  {
    imageUri: 'https://i.pravatar.cc/300',
    name: 'Nico',
    id: 2,
  },

  {
    imageUri: 'https://i.pravatar.cc/300',
    name: 'Jack',
    id: 3,
  },
  {
    imageUri: 'https://i.pravatar.cc/300',
    name: 'Daniel',
    id: 4,
  },
  {
    imageUri: 'https://i.pravatar.cc/300',
    name: 'Tom',
    id: 5,
  },
  {
    imageUri: 'https://i.pravatar.cc/300',
    name: 'Jamie',
    id: 6,
  },
  {
    imageUri: 'https://i.pravatar.cc/300',
    name: 'Rob',
    id: 7,
  },
  {
    imageUri: 'https://i.pravatar.cc/300',
    name: 'Justin',
    id: 8,
  },
];

const Stories = () => (
  <FlatList
    horizontal={true}
    data={data}
    keyExtractor={({id}) => id}
    renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />}
  />
);

export default Stories;
