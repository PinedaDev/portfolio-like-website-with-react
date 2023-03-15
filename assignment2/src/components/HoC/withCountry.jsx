import { useCountry } from "../../hooks/useCountry"

export function withCountry(Component) {
    return (props) => {
        const [error, country] = useCountry('Cuba')
        return <Component {...props} country={country} />
    }
}
