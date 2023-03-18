import Button from '../../Global/Button/Button';

type ServiceCardProps = {
    serviceName: string
}

const ServiceCard = ({ serviceName }: ServiceCardProps) => {
    return (
        <div className="services_section__card">
            <h2 className="services_section__card_header" id="service1">
                {serviceName}
            </h2>

            <article>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
                Nam architecto tenetur ut hic ad? Numquam harum<br />
                laborum maiores obcaecati assumenda!
            </article>
            <Button text='more' />
        </div>
    )
}
export default ServiceCard