import React from 'react';
import BookAppointmentBtn from '../../../bookAppointmentBtn/bookAppointmentBtn';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './appointmentBadge.module.css';
import classnames from 'classnames';

export default function AppointmentBadge() {
  return (
    <Centralizer>
      <div className={classnames("indexItemGlobal", classes.wrapper)}>
        <Centralizer space>
          <div style={{ marginTop: "-250px" }}>
            <BookAppointmentBtn />
          </div>
          <div className={classes.textHolder}>
            <p className={classes.text}>
              Stefano and Corinna Chiassai’s Archive is a  collection composed by more than 1500 MENSWEAR garments and accessories, gathered in 40 YEARS of fashion projects and researches. The open section features every type of fashion products: from all cathegory of clothes to accessories.
             </p>
            <p className={classes.text}>
              TheArchive hold pieces from every decade and of every style, not just the ones considered fashionable, but true pieces of art and rare historical clothes and accessories.
        </p>
          </div>
          <div className={classes.textHolder2}>
            <p className={classes.text}>
              Every piece is unique and was chosen for some  special details, fabric manipulation, material  and techniques. Garments, accessories,  materials and fabrics manipulation are avaible  to rent or to consult and to be worked on  location. Every season TheArchive will be  shuffled and refreshed with new entry garment  and ideas!
              TheCube was born on the idea of creating an  expanded work enviroment that could be flexible  and played by professionists, students and  amateurs, and be inspiring at 360”.
          </p>
          </div>
        </Centralizer>
      </div >
    </Centralizer>)
};