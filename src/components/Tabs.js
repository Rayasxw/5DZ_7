import React from 'react';
import {Tab, Tabs} from "@mui/material";

function Tabss({categoriesSelect, value, setValue}) {

    const handleChahge = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <div>

            <Tabs
                centered
                value={value}
                onChange={handleChahge}

            >
                {categoriesSelect.map((tab) =>
                    <Tab
                        className='categoryTitle'
                        value={tab['value']}
                        key={tab['value']}
                        label={tab['label']}

                    />
                )}

            </Tabs>
        </div>
    );
}

export default Tabss;