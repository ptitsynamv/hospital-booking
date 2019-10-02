import React from "react";
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';

const suggestions = [
    {label: 'Afghanistan'},
    {label: 'Aland Islands'},
    {label: 'Albania'},
    {label: 'Algeria'},
    {label: 'American Samoa'},
    {label: 'Andorra'},
    {label: 'Angola'}

].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));


export default function Booking() {
    const [single, setSingle] = React.useState(null);

    const handleChangeSingle = value => {
        setSingle(value);
    };

    return (
        <div>
            <NoSsr>
                <Select
                    inputId="react-select-single"
                    TextFieldProps={{
                        label: 'Country',
                        InputLabelProps: {
                            htmlFor: 'react-select-single',
                            shrink: true,
                        },
                    }}
                    placeholder="Search a country (start with a)"
                    options={suggestions}
                    value={single}
                    onChange={handleChangeSingle}
                />
            </NoSsr>
        </div>
    );
}
