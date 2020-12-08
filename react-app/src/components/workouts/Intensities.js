import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { fetchIntensities, setIntensities } from '../../store/users';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
        // borderRadius: '50px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },

}));


export default function Intensities() {
    const classes = useStyles();
    const intensities = useSelector((state) => state.store.intensities)

    console.log('intensitiesss', intensities)
    let intensityList = Object.values(intensities)
    console.log('list', intensityList)


    return (
        <div className={classes.root}>
            {
                intensityList.map((intensity, i) => {
                    let panelContent = `panel${i}a-content`
                    let panelHeader = `panel${i}a-header`
                    return (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={panelContent}
                                id={panelHeader}
                            // aria-controls='panel1a-content'
                            // id="panel1a-header"
                            >
                                <Typography className={classes.heading}>{'Sets: ' + intensity.sets + ' ' + 'Reps: ' + intensity.reps}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    delete button
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    );
}
