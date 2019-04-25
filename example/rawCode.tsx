import React from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";

interface IProps {
  code: string;
  scaleY?: number;
}

const RawCode: React.FunctionComponent<IProps> = (props) => {
  return (
    <div 
      style={{
        marginTop: 20,  
        transform: 'scaleY(' + props.scaleY + ')', 
        transition: 'transform 0.2s',
        transformOrigin: 'left top'
      }}
    >
      {
        <Highlight {...defaultProps} code={props.code} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      }
    </div>
  )
}

export default RawCode;