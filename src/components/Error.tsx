interface Props {
    title?: string;
    message?: string;
}

export const Error = ({title, message}: Props) => {
    return(
        <div>
            <h6>{title ?? "An error has occured!"}</h6>
            <p>{message ?? "Details unavailable." }</p>
        </div>
    );
}