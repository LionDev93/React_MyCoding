import * as React from 'react';
import ModalContainer from '@edmit/component-library/src/components/atoms/modal-container';
import Heading, { EHeadingSize } from '@edmit/component-library/src/components/atoms/typography/heading';
import ConnectedSearchColleges from '../../../../connectors/molecules/search-colleges';
import Text from '@edmit/component-library/src/components/atoms/typography/text';
import Button, { EButtonSize, EButtonType } from '@edmit/component-library/src/components/atoms/button';

import CheckableCollegeButton from '../components/checkable-college-button';

interface IAddCollegeViewModel {
    isOpen: boolean;
    clickoutEnabled?: boolean;
}

interface IAddCollegeActions {
    onConfirm?: () => any | void;
    onCancel?: () => any | void;
}

type AddCollegeProps = IAddCollegeViewModel & IAddCollegeActions;

const AddCollegeDialog: React.FC<AddCollegeProps> = props => {
    const [checkedU1, setCheckedU1] = React.useState(false);
    const [checkedU2, setCheckedU2] = React.useState(false);
    const [checkedU3, setCheckedU3] = React.useState(false);

    return (
        <>
            <ModalContainer
                maxWidth={600}
                isOpen={props.isOpen}
                onClickOut={props.clickoutEnabled ? props.onCancel : undefined}
                style={{ overflowY: 'auto' }}
            >
                <div className="pa4">
                    <div className="flex flex-column">
                        <div className="flex flex-row justify-end" onClick={props.onCancel}>
                            <i className="material-icons pointer"
                                style={{
                                    width: 28,
                                    height: 28,
                                    fontSize: 28,
                                    color: '#c9c9c9',
                                }}>
                                close
                            </i>
                        </div>
                        <Heading
                            size={EHeadingSize.H3}
                            text="Add colleges"
                            className="tl mv3"
                            style={{ fontWeight: 900 }}
                        />
                        <ConnectedSearchColleges
                            myColleges={[]}
                            onSearch={() => null}
                            inputValue={''}
                            onSelected={async selected => { }}
                            style={{ border: 'solid 1px #999999', borderRadius: 3 }}
                            className="mv3"
                        />
                        <div className="flex flex-column">
                            <Text className="t-small mh1" style={{ fontSize: 10, opacity: 0.75 }}>
                                YOUR COLLEGES
                            </Text>
                            <div className="flex flex-column">
                                <CheckableCollegeButton
                                    text="Case Western Reserve University"
                                    location="Cleveland, OH"
                                    checked={checkedU1}
                                    onChange={() => setCheckedU1(!checkedU1)}
                                    className="mv1"
                                />
                                <CheckableCollegeButton
                                    text="Miami University"
                                    location="Oxford, OH"
                                    checked={checkedU2}
                                    onChange={() => setCheckedU2(!checkedU2)}
                                    className="mv1"
                                />
                                <CheckableCollegeButton
                                    text="Ohio State University"
                                    location="Columbus, OH"
                                    checked={checkedU3}
                                    onChange={() => setCheckedU3(!checkedU3)}
                                    className="mv1"
                                />
                            </div>
                        </div>
                        <div className="mt5 mb2">
                            <Button
                                className="w-100 mv1"
                                text={"Finish"}
                                onClick={() => { }}
                                size={EButtonSize.Large}
                                type={EButtonType.Primary}
                            />
                        </div>
                    </div>
                </div>
            </ModalContainer>
        </>
    )
}

export default AddCollegeDialog;