import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import './style.css';



export const RemotionVideo: React.FC = () => {
	return (

		<>
			<Composition
				id="HaloHD"
				component={MyComposition}
				durationInFrames={240}
				fps={60}
				width={1920}
				height={1080}
			/>
				<Composition
				id="HaloPortrait"
				component={MyComposition}
				durationInFrames={240}
				fps={60}
				width={1080}
				height={1920}
			/>
				<Composition
				id="HaloiWalker"
				component={MyComposition}
				durationInFrames={240}
				fps={60}
				width={1024}
				height={1024}
			/>
		</>
	);
};
