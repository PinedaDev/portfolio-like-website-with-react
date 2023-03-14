import { useCountry } from "../../hooks/useCountry"

export function withCountry(Component, inputValue) {
    return (props) => {
        const [error, country] = useCountry(inputValue)
        return <Component {...props} country={country} />
    }
}