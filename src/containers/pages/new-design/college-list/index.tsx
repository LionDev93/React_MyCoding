import * as React from 'react';

import CollegeCard from '../college-card';
import Heading, { EHeadingSize } from '@edmit/component-library/src/components/atoms/typography/heading';
import { EEdmitColor } from '@edmit/component-library/src/lib/colors';
import ListGradeCard from '../../../../components/pages/my-colleges/list-grade-card';
import { EFinancialGrade } from '@edmit/component-library/src/shared';
import { MyCollegesCard } from '../../../../components/pages/my-colleges/shared';
import { EDetailedIconName } from '@edmit/component-library/src/components/atoms/icon-detailed';
import FormFieldCheckbox from '@edmit/component-library/src/components/atoms/form/form-field-checkbox';
import Text from '@edmit/component-library/src/components/atoms/typography/text';
import { Element } from "react-scroll";
import Button, { EButtonSize, EButtonType } from '@edmit/component-library/src/components/atoms/button';
import FormFieldCurrency from '@edmit/component-library/src/components/atoms/form/form-field-currency';

import AddCollegeDialog from '../college-add-dialog'
import DeleteConfirmDialog from '../delete-dialog'
// import EstimateDialog from '../estimated-popup';

// const staticCollege: CollegeModel = {
//     name: "Case Western Reserve University",
//     abbreviation: "CWRU",
//     medianEarnings: [],
//     coverImageUrl: "https://storage.googleapis.com/edmit-wikipedia-scraped-college-images/FINAL_IMAGES/Caltech_Entrance.jpg",
//     averageCostOfAttendance: 60000,
//     debtRemaining: [],
//     id: "cwru",
//     costOfAttendance: {
//         value: 62949
//     },
//     edstimate: {
//         value: 24399
//     },
//     postalCode: {
//         id: "pc",
//         city: {
//             id: "city-cleveland",
//             name: "Cleveland",
//             state: {
//                 abbreviation: "OH",
//                 id: "state-ohio",
//                 name: "Ohio"
//             },
//         },
//     },
//     netEarnings: [],
//     averageAnnualEarningsAmount: {
//         value: 10000
//     },
//     annualLoanPaymentAmount: {
//         value: 100
//     },
//     valueBenchmark: {
//         value: 200
//     },
//     valueDelta: {
//         value: 3000
//     },
//     financialGrade: FinancialGrade.A
// }

type IconButtonOnClickFn = () => any;

const ifHovered = (hovered: boolean, nonHoverStyle: React.CSSProperties, hoverStyle: React.CSSProperties) => {
    return hovered ? hoverStyle : nonHoverStyle
}


interface IIconButtonPropsViewModel {
    text: string;
    onClick: IconButtonOnClickFn;
    loading?: boolean;
    testId?: string;
    icon?: string;
}

type IconButtonProps = IIconButtonPropsViewModel

export const IconButton: React.FC<IconButtonProps> = (props) => {
    const [hovered, setHovered] = React.useState(false)

    const IconButtonStyle: React.CSSProperties = {
        border: `solid 1px ${EEdmitColor.MediumGrey}`,
        borderRadius: "2px",
        minWidth: "100px",
        color: "#282727",
        fontFamily: "Lato",
        fontWeight: 600,
        fontSize: "14px",
        userSelect: "none",
        cursor: "pointer"
    }

    const IconButtonHoveredStyle: React.CSSProperties = {
        ...IconButtonStyle,
        border: `solid 1px ${EEdmitColor.DarkGrey}`
    }

    return (
        <>
            <div
                data-testid={props.testId}
                onClick={(e) => {
                    e.stopPropagation();
                    props.onClick();
                    return false;
                }}
                className="pa2 center tc"
                style={ifHovered(hovered, IconButtonStyle, IconButtonHoveredStyle)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div style={{ color: '#282727' }}>
                    {props.icon &&
                        <i className="material-icons mr2"
                            style={{
                                width: 18,
                                height: 18,
                                fontSize: 18,
                            }}>{props.icon}
                        </i>
                    }
                    {props.text}
                </div>
            </div>
        </>
    )
}


interface ICollegeListPageViewModel {
}

type CollegeListPageProps = ICollegeListPageViewModel;

const CollegeListPage: React.FC<CollegeListPageProps> = props => {
    const [isAddDialog, setIsAddDialog] = React.useState(false);
    const [isRemoveDialog, setIsRemoveDialog] = React.useState(false);
    const unlockedPage = () => {
        return (
            <div className="flex flex-column ph4 pv4" style={{ maxWidth: 782 }}>
                {/* <div className="w-100" style={{ maxWidth: 740 }}> */}
                <div className="flex flex-row justify-between">
                    <Heading
                        size={EHeadingSize.H2}
                        text="College List"
                        className="tl ma0"
                        style={{ fontWeight: 900 }}
                    />
                    <div>
                        <IconButton
                            text={'Add colleges'}
                            icon={'add_circle_outline'}
                            // className="ph5 pv0"
                            onClick={() => { setIsAddDialog(true) }}
                        />
                    </div>
                </div>
                {/* Universite Card List */}
                <div className="mt3">
                    <CollegeCard className="mv3" onRemove={() => { setIsRemoveDialog(true) }} />
                    <CollegeCard className="mv3" onRemove={() => { }} />
                    <CollegeCard className="mv3" onRemove={() => { }} />
                    <CollegeCard className="mv3" onRemove={() => { }} />
                </div>
                {/* divider */}
                <div className="mv4" style={{ height: 1, backgroundColor: '#c9c9c9', opacity: 0.5 }} />
                {/* overall view */}
                <div className="">
                    <ListGradeCard
                        overallListFinancialGrade={EFinancialGrade.A}
                        collegeFinancialGrades={[EFinancialGrade.AMINUS, EFinancialGrade.B]}
                        loading={false}
                    />
                </div>
                {/* improve financial Grade */}
                <div className="mt4">
                    <MyCollegesCard
                        iconName={EDetailedIconName.Lightbulb}
                        heading={`Improving your Financial Grade`}
                        loading={false}
                    >
                        <div className={'flex flex-row'}>
                            {/* Check boxes */}
                            <div className={'mt3 w-100 w-40-l'}>
                                <div
                                    className={'mv0 mv1-l br2 pv1 ph2'}
                                    style={{
                                        // backgroundColor: hexOffwhite
                                    }}
                                >
                                    <div className={"flex"}>
                                        <FormFieldCheckbox
                                            checked={true}
                                            required={false}
                                            className={"mt2"}
                                        />
                                        <div className={"pointer flex-grow-1"}>
                                            <Text className={'ml1 mv0'}>Add a college to your list</Text>
                                        </div>
                                    </div>
                                    <div className={"flex"}>
                                        <FormFieldCheckbox
                                            checked={true}
                                            required={false}
                                            className={"mt2"}
                                        />
                                        <div className={"pointer flex-grow-1"}>
                                            <Text className={'ml1 mv0'}>Add a college to your list</Text>
                                        </div>
                                    </div>
                                    <div className={"flex"}>
                                        <FormFieldCheckbox
                                            checked={true}
                                            required={false}
                                            className={"mt2"}
                                        />
                                        <div className={"pointer flex-grow-1"}>
                                            <Text className={'ml1 mv0'}>Add a college to your list</Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Tips and household and dismiss button */}
                            <div className={'mt4 w-100 w-60-l'}>
                                <Element name="tipArea">
                                    <div className="flex flex flex-column items-center">
                                        {/* Tips */}
                                        <div>Tips area</div>
                                        {/* currency input field */}
                                        <div className={'mt4 w5'}>
                                            <FormFieldCurrency
                                                label={'Household Income'}
                                                value={136742}
                                                onChange={value => { }}
                                                required={false}
                                            />
                                        </div>
                                        {/* dismiss button */}
                                        <div className={'flex justify-center mt4'}>
                                            <Button
                                                text={'Dismiss'}
                                                size={EButtonSize.Medium}
                                                type={EButtonType.Secondary}
                                                onClick={() => {

                                                }}
                                            />
                                        </div>
                                    </div>
                                </Element>
                            </div>
                        </div>
                    </MyCollegesCard>
                </div>

                {/* Footer */}
                <div className="w-100 pb4 tc lh-solid mv5">
                    <span className="t-small fw4 gray-dim link mb3 no-underline">
                        © 2019 Edmit, Inc.
                    </span>
                    <span className="t-small fw4 gray-dim dib ph2">|</span>
                    <a className="t-small fw4 gray-dim link mb3 no-underline" href="https://www.edmit.me/terms">
                        Terms of Use
                    </a>
                    <span className="t-small fw4 gray-dim dib ph2">|</span>
                    <a className="t-small fw4 gray-dim link mb3 no-underline" href="https://www.edmit.me/privacy">
                        Privacy
                    </a>
                </div>

                {/* Dialog */}
                <AddCollegeDialog
                    isOpen={isAddDialog}
                    clickoutEnabled={true}
                    onCancel={() => setIsAddDialog(false)}
                >
                </AddCollegeDialog>
                {/* Remove Confirm Dialog */}
                <DeleteConfirmDialog
                    isOpen={isRemoveDialog}
                    onConfirm={() => setIsRemoveDialog(false)}
                    onCancel={() => setIsRemoveDialog(false)}
                />
                {/* Estimate Dialog */}
                {/* <EstimateDialog
                    isOpen={isAddDialog}
                    clickoutEnabled={true}
                    onCancel={() => setIsAddDialog(false)}
                /> */}
            </div >
        )
    }
    return (
        <>
            {unlockedPage()}
        </>
    )
};

export default CollegeListPage;
