const GuidtoieltsSingPart = ({getdata}) => {
    return (
      <p dangerouslySetInnerHTML={{
        __html: getdata.description,
      }}></p>
    )
  }
  
  export default GuidtoieltsSingPart