import styles from './mainPage.module.css'
import InputCus from './../../components/inputCus/inputCus'
import SelectCus from './../../components/selectCus/selectCus'
import Map from "./../../components/map/map"
import React, {useState} from "react";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import {Button} from '@material-ui/core'
import axios from 'axios';
const items = [
    {value: "workplace", title: 'Work Place', icon: WorkOutlineOutlinedIcon},
    {value: "home", title: 'Home', icon: HomeOutlinedIcon},
    {value: "school", title: 'School', icon: SchoolOutlinedIcon},
]


let MainPage: React.FC = () => {
    let [locationName, setLocationName] = useState<string>('')
    let [locationType, setLocationType] = useState<string>('')
    const [pin, setPin] = useState<number[] | undefined>(undefined)


    const confirm = () => {
        axios.post('https://localhost:4000/api/create_new_record', {name:locationName,type:locationType,coordinate:pin}).then(
            () => {

            }
        ).catch(
            () => {

            })
    }


    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={`title`}>
                    Share Address
                </div>
                <div className={`paper ${styles.card}`}>
                    <div className={styles.row}>
                        <div className={styles.col6}>
                            <InputCus
                                onChange={(e) => setLocationName(e.target.value)}
                                value={locationName}
                                label={'Location Name'}
                                hint={'example: My aunt\'s place'}
                            />
                        </div>
                        <div className={styles.col6}>
                            <SelectCus label={'Location Type'} value={locationType}
                                       onChange={(e) => setLocationType(e.target.value)} items={items}/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <Map setPin={setPin}/>
                    </div>
                </div>
                <div className={[styles.buttonRow, 'mt-1'].join(' ')}>
                    <div className='w-50 pr-1'>
                        <Button className='w-100' variant={"contained"} color={"secondary"}>Records</Button>
                    </div>
                    <div className='w-50 pl-1'>
                        <Button className='w-100' variant={"contained"} color={"primary"} onClick={confirm}>Confirm</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default MainPage;

