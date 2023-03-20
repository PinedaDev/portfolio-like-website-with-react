const withCountry = (WrappedComponent) => {
    const WithCountry = ({ countryName, ...props }) => {
        const [error, setError] = useState(null);
        const [country, setCountry] = useState(null);

        const apiUrl = `https://restcountries.com/v3.1/name/${encodeURIComponent(
            countryName
        )}?fullText=true`;

        const countryData = useMemo(() => {
            const cachedData = localStorage.getItem(apiUrl);
            if (cachedData) {
                return JSON.parse(cachedData);
            } else {
                return null;
            }
        }, [apiUrl]);

        useEffect(() => {
            if (countryData) {
                setCountry(countryData[0]);
            } else {
                fetch(apiUrl)
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.status && data.status === 404) {
                            setError(`Country '${countryName}' not found.`);
                        } else {
                            localStorage.setItem(apiUrl, JSON.stringify(data));
                            setCountry(data[0]);
                        }
                    })
                    .catch((error) => {
                        setError(`Error fetching country data: ${error}`);
                    });
            }
        }, [countryName, apiUrl, countryData]);

        return <WrappedComponent error={error} country={country} {...props} />;
    };

    return WithCountry;
};

export default withCountry;