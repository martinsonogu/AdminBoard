import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



const VerticalSlider = (props) =>  {

  const [value, setValue] = useState(1);
  
  const newSliderValue = (event, value) => {
  setValue(value);
  }

  function PreventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

  return ( <div className="slide">
    <Box sx={{ height: 250 }}>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: 'slider-vertical',
          },
        }}
        orientation="vertical"
        defaultValue={10}
        step={1}
        min={1} 
        max={10}
        value={value}
        onChange={newSliderValue}
        onClick={() => props.changedValue(value)}
        aria-label="Temperature"
        onKeyDown={PreventHorizontalKeyboardNavigation}
      />
    </Box>
    </div>
  );
}
export default VerticalSlider;