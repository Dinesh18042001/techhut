import React from 'react'
import DigitalMarketerBanner from './DigitalMarketerBanner'
import Companies from "../../Companies";
import Market from '../FullStackDev/Market';
import TheMarket from './TheMarket';
import DigTechProfessionals from './DigTechProfessionals';
import DigitalSolidEngineer from './DigitalSolidEngineer';
import DigitalTechCareer from './DigitalTechCareer';
import Questions from '../../Questions';

export default function DigitalMarketerMain() {
  return (
    <>
    <DigitalMarketerBanner/>
    <Companies/>
    <TheMarket/>
    <DigTechProfessionals/>
    <DigitalSolidEngineer/>
    <DigitalTechCareer/>
    <Questions/>
    </>
  )
}
