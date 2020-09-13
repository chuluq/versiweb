import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import KelasContext from './kelasContext';
import kelasReducer from './kelasReducer';
import { ADD_KELAS } from '../types';

const KelasState = (props) => {
  // hard code data
  const initialState = {
    kelass: [
      {
        id: 1,
        namaKelas: 'Matematika',
        ruangKelas: 'http://classroom.google.com',
        zoomKelas: 'http://zoom.com',
      },
      {
        id: 2,
        namaKelas: 'Fisika',
        ruangKelas: 'http://classroom.google.com',
        zoomKelas: 'http://zoom.com',
      },
      {
        id: 3,
        namaKelas: 'Kimia',
        ruangKelas: 'http://classroom.google.com',
        zoomKelas: 'http://zoom.com',
      },
    ],
  };

  const [state, dispatch] = useReducer(kelasReducer, initialState);

  // Add Kelas
  const addKelas = (kelas) => {
    dispatch({
      type: ADD_KELAS,
      payload: kelas,
    });
  };

  // Update Kelas

  // Delete Kelas

  return (
    <KelasContext.Provider
      value={{
        kelass: state.kelass,
        addKelas,
      }}
    >
      {props.children}
    </KelasContext.Provider>
  );
};

export default KelasState;
