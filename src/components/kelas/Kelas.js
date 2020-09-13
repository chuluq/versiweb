import React, { Fragment, useContext } from 'react';
import KelasItem from '../kelas/KelasItem';
import KelasContext from '../../context/kelas/kelasContext';

const Kelas = () => {
  const kelasContext = useContext(KelasContext);
  const { kelass } = kelasContext;

  return (
    <Fragment>
      {kelass.map((kelas) => (
        <KelasItem key={kelas.id} kelas={kelas} />
      ))}
    </Fragment>
  );
};

export default Kelas;
