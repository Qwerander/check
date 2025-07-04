import cls from './HeaderVideo.module.scss';
import video from '../../assets/video/vid.mp4';

export const HeaderVideo = () => {
    return (
        <div className={cls.headerVideo}>
            <video className={cls.video} autoPlay loop src={video} muted type="video/mp4"></video>
        </div>
    );
};
