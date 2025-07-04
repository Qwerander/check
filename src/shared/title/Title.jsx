import cls from './Title.module.scss';

export const Title = ({ title, Tag = 'h1', className, center = false }) => {
    return (
        <div className={`${cls.titleWrapper} ${center ? cls.center : ''}` }>
            <Tag className={className}>{title}</Tag>
        </div>
    );
};
