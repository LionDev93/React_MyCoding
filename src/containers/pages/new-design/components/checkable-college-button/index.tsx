import * as React from 'react';

import university_icon from '../../../../../assets/img/university_icon.png';
import Text from '@edmit/component-library/src/components/atoms/typography/text';
const style_normal: React.CSSProperties = {
    borderRadius: '2px',
    boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
    border: 'solid 1px #c9c9c9',
    backgroundColor: '#ffffff',
    opacity: 0.5,
    cursor: 'pointer',
}

const style_selected: React.CSSProperties = {
    borderRadius: '2px',
    boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
    border: 'solid 1px #999999',
    backgroundColor: '#ffffff',
    opacity: 1,
    cursor: 'pointer',
}

interface ICheckableCollegeButtonViewModel {
    text: string,
    location: string,
    checked: boolean,
    className?: string,
    style?: any,
}

interface ICheckableCollegeButtonActions {
    onChange?: () => any | void;
}

type CheckableCollegeButtonProps = ICheckableCollegeButtonViewModel & ICheckableCollegeButtonActions;

const CheckableCollegeButton: React.FC<CheckableCollegeButtonProps> = props => {
    return (
        <div className={props.className ? props.className : ''} style={props.style ? props.style : {}}
            onClick={props.onChange}
        >
            <div className="flex flex-row justify-center items-center ph3 pv2" style={props.checked ? style_selected : style_normal}>
                {props.checked ?
                    <div className="flex justify-center items-center" style={{ width: 18, height: 18, borderRadius: 2, backgroundColor: '#282727' }}>
                            <i className="material-icons"
                                style={{
                                    fontSize: 16,
                                    color: '#ffffff',
                                }}>
                                check
                        </i>
                    </div>
                :
                    <div style={{ width: 18, height: 18, borderRadius: 2,  border:'solid 1px #979797'}} />
                }
                
                <div className="mh3" style={{ width: 1, height: 28, backgroundColor: '#c9c9c9' }} />
                <img alt="..." src={university_icon} className="mh2" style={{ width: 20, height: 22 }} />
                <Text className="flex-grow-1 ma0" style={{ fontSize: 14, fontWeight: 'bold', color: '#282727' }}>{props.text}</Text>
                <Text className="ma0" style={{ fontSize: 14, color: '#6f6868' }}>{props.location}</Text>
            </div>
        </div>
    )
}

export default CheckableCollegeButton;