export default (search: string): { [key: string]: string } | undefined => (
    search.length ?
        search.substring(1)
            .split("&")
            .reduce(
                (prev, next) => {
                    const y = next.match(/^(.*)=(.*)/);
                    return (
                        y ? Object.assign(prev, { [decodeURI(y[1])]: decodeURI(y[2]) })
                      :     prev
                    );
                },
                {}
            )
  :                 undefined
);
