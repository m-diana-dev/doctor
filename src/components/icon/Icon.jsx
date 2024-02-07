import iconSprite from '../../assets/images/icons-sprite.svg'


//компонент icon для отрисовки иконок из svg спрайта. принимает пропсы id,width,height,viewBox
export const Icon = ({
                                            id,
                                            width,
                                            height,
                                            viewBox
                                        }) => {
    return (
        <svg width={width || "30"} height={height || "30"} viewBox={viewBox || "0 0 30 30"}
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${id}`}/>
        </svg>
    );
}