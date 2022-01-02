import { CustomButtonContainer } from './custom-button.style';


const CustomButton = ({children, ...props}) => (
  <CustomButtonContainer {...props}>
    <span>{children}</span>
  </CustomButtonContainer>
);
export default CustomButton;