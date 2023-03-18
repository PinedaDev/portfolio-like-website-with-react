type ButtonProps = {
    text: string;
    link?: string;
}

const Button = ({ text, link }: ButtonProps) => {

    link ? link : link = '#';

    return (
        <a href={link} className='btn' id="srv1-btn" aria-labelledby="service1 srv1-btn">
            {text}
        </a>
    )
}
export default Button