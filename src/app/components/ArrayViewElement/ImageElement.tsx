import React from "react";
import styled from "styled-components";

import { ArrayViewElement, ArrayViewElementProps } from "@/app/components/ArrayViewElement";

interface ImageElementProps extends ArrayViewElementProps {
    image: string;
}

const StyledImageElement = styled(ArrayViewElement).attrs<ImageElementProps>(({ array, index }) => ({
    style: {
        backgroundPosition: ((array[index] - 1) / (array.length - 1)) * 100 + "% 0"
    }
}))<ImageElementProps>`
    background-image: url("${({ image }) => image}");
    background-repeat: no-repeat;
    background-size: ${({ array }) => array.length * 100}% 100%;

    height: 100%;
`;

const ImageElement = (props: ImageElementProps): JSX.Element => <StyledImageElement {...props} />;

export default ImageElement;
export { ImageElementProps, StyledImageElement };
