import {Img, AbsoluteFill} from 'remotion';
import {Logo} from './Logo';
import {Subtitle} from './Subtitle';
import {Title} from './Title';
import {interpolate,spring,useCurrentFrame,useVideoConfig } from "remotion";



import React from 'react';

export const Slideshow: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [20, 40], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});


  const { fps } = useVideoConfig();
	const frame = useCurrentFrame();

	const imageone =  interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
	const scaleone =  interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
	const imagetwo =  interpolate(frame, [100, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
	const scaletwo =  interpolate(frame, [100, 120], [0, 1], {
    extrapolateRight: "clamp",
	});
	
	const imagethree =  interpolate(frame, [40, 60], [0, 1], {
    extrapolateRight: "clamp",
  });
	const scalethree =  interpolate(frame, [40,60], [0, 1], {
    extrapolateRight: "clamp",
  });


	const scale = spring({
    fps,
    from: 0,
    to: 1,
    frame,
  });
 
	return (
		<div id="Slideshow"
		style={{
			transform: `scale(${scaleone})`,
			textAlign: "center",
			opacity: imageone,
			backgroundImage: "http://med05.expertagent.co.uk/in4glestates/{c929daaf-06b7-4a69-a1e6-ba16cbb6011f}/{2c6d2334-dec3-4343-b546-63c22cb522eb}/main/91-Irvine-Road,-Kilmarnock-01-DSC02273.jpg"  
			
		}}
	>
	
	</div>

  

	);
};
