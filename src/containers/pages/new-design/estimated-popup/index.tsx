import * as React from 'react';
import ModalContainer from '@edmit/component-library/src/components/atoms/modal-container';
import Heading, { EHeadingSize } from '@edmit/component-library/src/components/atoms/typography/heading';
// import Text from '@edmit/component-library/src/components/atoms/typography/text';
import Button, { EButtonSize, EButtonType } from '@edmit/component-library/src/components/atoms/button';

import FormFieldText from '@edmit/component-library/src/components/atoms/form/form-field-text';
import Text from '@edmit/component-library/src/components/atoms/typography/text';

interface IEstimateViewModel {
    isOpen: boolean;
    clickoutEnabled?: boolean;
}

interface IEstimateActions {
    onConfirm?: () => any | void;
    onCancel?: () => any | void;
}

type EstimateProps = IEstimateViewModel & IEstimateActions;

const formStyle = {
    minWidth: 250,
    borderRadius: '3px',
    border: 'solid 1px #c9c9c9',
    "&:hover": {
        borderRadius: '3px',
        border: 'solid 1px #282727',
    }

}

const EstimateDialog: React.FC<EstimateProps> = props => {
    // const [checked, setChecked] = React.useState(false);
    const [gpa, setGpa] = React.useState("");
    const [sat, setSat] = React.useState("");
    const [psat, setPsat] = React.useState("");
    const [act, setAct] = React.useState("");
    const [householdIncome, setIncome] = React.useState("");
    const ableToSubmit = () => {
        if (gpa && sat && psat && act && householdIncome)
            return false;
        return true;
    }
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
                            text="You’re just a few steps away from seeing what you’ll pay for college."
                            className="tl mv3"
                            style={{ fontWeight: 900 }}
                        />
                        {/* Form  */}
                        <div className="mv3 flex flex-column">
                            <div className="mv2">
                                <FormFieldText
                                    name={'gpa'}
                                    label={'GPA'}
                                    value={gpa}
                                    onChange={value => setGpa(value)}
                                    placeholder={'#.#'}
                                    required={false}
                                    style={formStyle}
                                    className="ph2 pv2 w-auto"
                                />
                                <Text className="t-small  mt2 mb0">
                                    As it appears on your student's transcript(weighted or unweighted)
                                </Text>
                            </div>
                            <div className="flex flex-row mv2 justify-between">
                                <FormFieldText
                                    name={'sat'}
                                    label={'SAT Score'}
                                    value={sat}
                                    onChange={value => setSat(value)}
                                    placeholder={'####'}
                                    required={false}
                                    style={formStyle}
                                    className="ph2 pv2 w-auto"
                                />
                                <FormFieldText
                                    name={'psat'}
                                    label={'PSAT Score'}
                                    value={psat}
                                    onChange={value => setPsat(value)}
                                    placeholder={'####'}
                                    required={false}
                                    style={formStyle}
                                    className="ph2 pv2 w-auto"
                                />
                            </div>
                            <div className="mv2">
                                <FormFieldText
                                    name={'act'}
                                    label={'ACT Score'}
                                    value={act}
                                    onChange={value => setAct(value)}
                                    placeholder={'##'}
                                    required={false}
                                    style={formStyle}
                                    className="ph2 pv2 w-auto"
                                />
                            </div>
                            <div className="mv2">
                                <FormFieldText
                                    name={'household income'}
                                    label={'Yearly Household Income'}
                                    value={householdIncome}
                                    onChange={value => setIncome(value)}
                                    placeholder={'##'}
                                    required={false}
                                    style={formStyle}
                                    className="ph2 pv2 w-auto"
                                />
                                <Text className="t-small mt2 mb0">
                                    Reason why yearly household income is needed
                                </Text>
                            </div>

                        </div>

                        <div className="mt4 mb2">
                            <Button
                                className="w-100 mv1"
                                text={"Finish"}
                                onClick={() => { }}
                                size={EButtonSize.Large}
                                type={EButtonType.Primary}
                                disabled={ableToSubmit()}
                            />
                        </div>
                    </div>
                </div>
            </ModalContainer>
        </>
    )
}

export default EstimateDialog;