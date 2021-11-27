import FlexBox from '../../styles/Flexbox';

const FormSection = props => {
  return <FlexBox column>{props.children}</FlexBox>;
};

export default FormSection;
