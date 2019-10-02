import React from 'react';
import './SimpleMap.scss'
import Typography from "@material-ui/core/Typography/Typography";
import Popover from "@material-ui/core/Popover/Popover";

export default function SimpleMap() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const hospitals = [
        {
            cx: 102,
            cy: 102,
            textCx: 65,
            textCy: 105,
            hospitalId: '1',
            hospitalName: 'Hospital 1',
        },
        {
            cx: 300,
            cy: 80,
            textCx: 260,
            textCy: 80,
            hospitalId: '2',
            hospitalName: 'Hospital 2',
        },
        {
            cx: 200,
            cy: 300,
            textCx: 170,
            textCy: 300,
            hospitalId: '3',
            hospitalName: 'Hospital 3',
        },
    ];
    const handleClick = (event, id) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <section>
            <svg>
                {hospitals.map((hospital, i) =>
                    <g key={i}>
                        <circle
                            cx={hospital.cx}
                            cy={hospital.cy}
                            r="50" strokeWidth="1"
                            onClick={e => handleClick(e, hospital.hospitalId)}/>
                        <text
                            x={hospital.textCx}
                            y={hospital.textCy}
                            className="name">
                            {hospital.hospitalName}
                        </text>
                    </g>
                )}
            </svg>
            <Popover
                id='simple-popover'
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography>The content of the Popover.</Typography>
            </Popover>

        </section>
    );
}
