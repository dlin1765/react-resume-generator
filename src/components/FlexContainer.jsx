function FlexContainer(props){
    return(
        <div style = {
            {
                display: props.display,
                alignItems: props.alignItems,
                backgroundColor: props.backgroundColor
            }}>
        </div>
    );
    
}

export default FlexContainer;