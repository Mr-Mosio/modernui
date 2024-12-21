import React from 'react';
import {Button, ButtonProps} from '@nextui-org/react';
import PropTypes from 'prop-types';

export type Props = ButtonProps


const MyButton = ({color}: Props) => {
    return (
        <Button color={color}>test</Button>
    )
}

MyButton.propTypes = {
    color: PropTypes.oneOf(['secondary', 'primary']),
}
export default MyButton