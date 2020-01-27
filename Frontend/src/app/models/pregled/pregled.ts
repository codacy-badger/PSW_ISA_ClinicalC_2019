import { Pacijent } from '../pacijent/pacijent';

import { Lekar } from '../lekar/lekar';

import { Sala } from '../sala/sala';

export class Pregled{
    id:number;
    jboPacijenta:String;
    jboLekara:String;
    pocetak:String;
    kraj:String;
    datum:String;
    departman:String;
    dan:number;
    mesec:number;
    godina:number;
    minut1:number;
    sat1:number;
    sat2:number;
    minut2:number;

    public Pregled(){
    }
}