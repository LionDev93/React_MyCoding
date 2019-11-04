import * as React from 'react';
import Heading from '@edmit/component-library/src/components/atoms/typography/heading';
import { EHeadingSize } from '@edmit/component-library/src/components/atoms/typography/heading';
import Text from '@edmit/component-library/src/components/atoms/typography/text';
import Card from '@edmit/component-library/src/components/atoms/card';
import Button, { EButtonSize, EButtonType } from '@edmit/component-library/src/components/atoms/button';

import { EFinancialGrade } from '@edmit/component-library/src/shared'

import university_icon from '../../../../assets/img/university_icon.png';
import Icon, { EIconName } from '@edmit/component-library/src/components/atoms/icon';
import { FitChip } from '@edmit/component-library/src/components/molecules/graph/fit';
import GenericHorizontalBarGraph from '@edmit/component-library/src/components/molecules/graph/generic-horizontal-bar';
import {
    conceptColor,
    hexBlue,
    hexGreen,
    hexTeal
} from '@edmit/component-library/src/components/atoms/colors';
import { OffWhiteSection } from '../../../../components/pages/comparison/shared';
import { Single, CenterNarrow } from '../../../../components/pages/report/shared';
import MetricCard from '@edmit/component-library/src/components/organisms/card-metric';
import { edstimateCopy, formatDollarsWhole } from '@edmit/component-library/src/shared';


const fake_universities: Array<any> = [
    { title: "New York University", level: "A" },
    { title: "Miami University", level: "A" },
    { title: "Case Western Reserve University", level: "A" },
    { title: "Vanderbilt University", level: "A" },
    { title: "Ohio University", level: "A" },
];

const unlocked: boolean = true;
const plus_manyCollege: boolean = true;

type UniversityCardProps = {
    title: string,
    level: string,
    checked?: boolean,
    disabled?: boolean,
    selected?: boolean,
    onClick?: any,
}
const UniversityCard: React.FC<UniversityCardProps> = props => {
    const circle_bg = props.level === "A" ? '#38b487' : '#efb051';
    const card_border = props.selected ? 'solid 1px #999999' : 'solid 1px #c9c9c9';
    return (
        <div onClick={props.onClick}>
            <Card
                className="br1 flex flex-row justify-center items-center pa2 ma1 pointer"
                style={{ boxShadow: `0 4px 12px 0 rgba(0, 0, 0, 0.05)`, border: card_border, width: 520, opacity: props.disabled ? 0.5 : 1 }}
            >
                <div className="radio ma1">
                    {props.selected &&
                        <div className="radio-checked" />
                    }
                </div>

                <div className="mh2" style={{ width: 1, height: 28, backgroundColor: '#c9c9c9' }} />

                <img alt="..." src={university_icon} className="mh2" style={{ width: 20, height: 22 }} />
                <span className="flex-grow-1" style={{ fontFamily: 'Lato', fontSize: 14, fontWeight: 'bold', color: '#282727' }}>{props.title}</span>

                <div className="ma1 flex justify-center items-center" style={{ width: 24, height: 24, backgroundColor: circle_bg, borderRadius: '50%' }}>
                    <span style={{ color: '#fff', fontFamily: 'Merriweather', fontSize: 14, fontWeight: 'bold' }}>{props.level}</span>
                </div>
            </Card >
        </div>
    )
}

export type UniversityButtonProps = {
    text: string,
    icon?: string,
    selected?: boolean,
    disabled?: boolean,
    onClick?: any,
}
export const UniversityButton: React.FC<UniversityButtonProps> = props => {
    const card_border = props.selected ? 'solid 1px #999999' : 'solid 1px #c9c9c9';
    return (
        <div onClick={!props.disabled && props.onClick}>
            <Card
                className="br1 flex flex-row justify-center items-center ma1 pointer"
                style={{
                    boxShadow: `0 4px 12px 0 rgba(0, 0, 0, 0.05)`, border: card_border,
                    opacity: props.disabled ? 0.5 : 1,
                    paddingLeft: 18,
                    paddingRight: 18,
                    paddingTop: 12,
                    paddingBottom: 12,
                }}
            >
                {props.icon && props.disabled &&
                    <i className="material-icons"
                        style={{
                            width: 18,
                            height: 18,
                            fontSize: 18,
                            color: '#6f6868',
                            marginRight: 8
                        }}>
                        {props.icon}
                    </i>
                }
                <span
                    style={{
                        fontFamily: 'Lato',
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#282727',
                        opacity: props.selected ? 1 : 0.5
                    }}
                >
                    {props.text}
                </span>
            </Card >
        </div>
    )
}

export interface IReportPageViewModel { }
type ReportPageProps = IReportPageViewModel;

const ReportPage: React.FC<ReportPageProps> = props => {
    // const [islocked, setLocked] = React.useState(true);
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    // const [selectedUniversity, setSelected]
    const handleUniversityClick = (index: number) => {
        setSelectedIndex(index)
    }

    React.useEffect(() => {
        if (fake_universities.length === 1) {
            setSelectedIndex(0)
        }
    }, []);

    const pageWithCollege = () => {
        return (
            <div className="flex flex-column pa4 justify-start items-center" >
                <div>
                    <i className="material-icons"
                        style={{
                            width: 96,
                            height: 96,
                            fontSize: 96,
                            color: '#282727',
                        }}>
                        insert_chart
                    </i>
                </div>
                <div className="flex flex-column  items-center">
                    <Heading
                        size={EHeadingSize.H2}
                        text="Select a college and unlock your free financial report."
                        className="tc mb1"
                        style={{ fontWeight: 900, maxWidth: 460 }}
                    />
                    <Text className="ma0" style={{ maxWidth: 400 }}>
                        Your first financial report is free. Upgrade to Plus and get access to unlimited reports.
                    </Text>
                </div>
                {/* University card list */}
                <div className="ma4 flex flex-column overflow-y-auto" style={{ maxHeight: 300 }}>
                    {fake_universities.map((item, index) => {
                        return (
                            <UniversityCard title={item.title} level={item.level} key={index}
                                onClick={() => handleUniversityClick(index)}
                                selected={selectedIndex === index}
                                disabled={selectedIndex !== -1 && selectedIndex !== index}
                            />
                        )
                    })
                    }
                </div>

                <div className="ma2">
                    <Button
                        size={EButtonSize.Large}
                        type={EButtonType.Primary}
                        text={'Continue'}
                        className="w-100"
                        style={{ width: 520 }}
                        onClick={() => { alert("button clicked") }}
                        disabled={selectedIndex < 0}
                    />
                </div>
            </div >
        )
    }

    const pageWithoutCollege = () => {
        return (
            <div className="flex flex-column pa4 justify-start items-center" >
                <div>
                    <i className="material-icons"
                        style={{
                            width: 96,
                            height: 96,
                            fontSize: 96,
                            color: '#282727',
                        }}>
                        lock
                </i>
                </div>
                <div className="flex flex-column  items-center">
                    <Heading
                        size={EHeadingSize.H2}
                        text="Build your college list to view financial reports."
                        className="tc mb1"
                        style={{ fontWeight: 900, maxWidth: 460 }}
                    />
                    <Text className="ma1 tc" style={{ maxWidth: 400 }}>
                        You must add at least one college to your college list to view financial reports.
                </Text>
                </div>

                <div className="ma4">
                    <Button
                        size={EButtonSize.Large}
                        type={EButtonType.Primary}
                        text={'Go to college list'}
                        className="w-100"
                        onClick={() => { alert("button clicked") }}
                    />
                </div>
            </div >
        )
    }

    const unlockedPage = () => {
        return (
            <div className="flex pa4">
                <div className="mw8 w-100">
                    <div className="ma2 flex flex-column">
                        <Heading
                            size={EHeadingSize.H2}
                            text="Financial Reports"
                            className="tl ma0"
                            style={{ fontWeight: 900 }}
                        />
                        <div className="flex flex-row mv4">
                            {fake_universities.map((item, index) => {
                                return (
                                    <UniversityButton
                                        text={item.title}
                                        icon={'lock'}
                                        onClick={() => handleUniversityClick(index)}
                                        selected={selectedIndex === index}
                                    // disabled
                                    />
                                )
                            }
                            )}
                        </div>
                        <div className="w-100" style={{ height: 1, backgroundColor: '#e3e3e3' }} />
                        <div >
                            <Card
                                className="br1 flex flex-column ma1 mv4 pa3"
                            >
                                <Heading
                                    size={EHeadingSize.H3}
                                    text="Key Takeaways"
                                    className="tc"
                                    style={{ fontWeight: 900 }}
                                />
                                <div className="flex flex-row h3" >
                                    <div className="w-25">

                                    </div>
                                    <div className="flex w-75" >
                                        <div className="w-25">
                                            <Text className="ma0 tc" style={{ color: '#202020' }}>
                                                Edstimate®
                                            </Text>
                                        </div>
                                        <div className="w-25">
                                            <Text className="ma0 tc" style={{ color: '#202020' }}>
                                                Affordability                                            </Text>
                                        </div>
                                        <div className="w-25">
                                            <Text className="ma0 tc" style={{ color: '#202020' }}>
                                                Value
                                            </Text>
                                        </div>
                                        <div className="w-25">
                                            <Text className="ma0 tc" style={{ color: '#202020', maxWidth: '150px' }}>
                                                Financial Grade
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mb3">
                                    <div className="w-25 flex justify-center items-center">
                                        <Text className="ma0 tc" style={{ fontSize: 24, color: '#202020', maxWidth: '200px' }}>
                                            New York University
                                    </Text>
                                    </div>
                                    <div className="flex w-75 pv4 bg-black-10">
                                        <div className="w-25 flex flex-column items-center justify-center green">
                                            <p className="f2 mv3" >$43.3k</p>
                                            <p className="f7 i-ns">per yr</p>
                                        </div>
                                        <div className="w-25 flex flex-column items-center justify-center">
                                            <Icon name={EIconName.Check} className="icon-xxlarge green fw9-ns-imp" />
                                        </div>
                                        <div className="w-25 flex flex-column items-center justify-center">
                                            <Icon name={EIconName.Check} className="icon-xxlarge green fw9-ns-imp" />
                                        </div>
                                        <div className="w-25 flex flex-column items-center justify-center">
                                            <FitChip
                                                size={40}
                                                admissionUnlikely={false}
                                                financialGrade={EFinancialGrade.A}
                                                loading={false}
                                                className={'ma-auto'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div>
                            <Card
                                className="br1 flex flex-column ma1 mv3 ph5 pv4"
                                style={{ border: 'solid 1px #c9c9c9' }}
                            >
                                <Heading
                                    size={EHeadingSize.H2}
                                    text="Upgrade to Plus and unlock unlimited financial reports."
                                    className="tl ma0"
                                    style={{ fontWeight: 900, maxWidth: 500 }}
                                />
                                <Button
                                    size={EButtonSize.Large}
                                    type={EButtonType.Primary}
                                    text={'Learn more'}
                                    className="mt4"
                                    style={{
                                        width: 164,
                                        height: 48,
                                        borderRadius: 2
                                    }}
                                    onClick={() => { alert("button clicked") }}
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const unlockedWithManyCollege = () => {
        return (
            <div className="flex pa4">
                <div className="mw7 w-100">
                    <div className="ma2 flex flex-column">
                        <Heading
                            size={EHeadingSize.H2}
                            text="Financial Reports"
                            className="tl ma0"
                            style={{ fontWeight: 900 }}
                        />
                        <div className="flex flex-row flex-wrap mv4">
                            {fake_universities.map((item, index) => {
                                return (
                                    <UniversityButton
                                        text={item.title}
                                        icon={'lock'}
                                        onClick={() => handleUniversityClick(index)}
                                        selected={selectedIndex === index}
                                    // disabled
                                    />
                                )
                            }
                            )}
                        </div>
                        <div className="w-100" style={{ height: 1, backgroundColor: '#e3e3e3' }} />
                        {selectedIndex === -1 &&
                            <div className="ma4 flex flex-column items-center o-20">
                                <i className="material-icons"
                                    style={{
                                        width: 96,
                                        height: 96,
                                        fontSize: 96,
                                        color: '#282727',
                                        marginRight: 8
                                    }}>
                                    assessment
                                </i>
                                <Heading
                                    size={EHeadingSize.H2}
                                    text="Select a college to 
                                    view a financial report."
                                    className="tc mb1"
                                    style={{ fontWeight: 900, maxWidth: 440 }}
                                />
                            </div>

                        }
                        {selectedIndex > -1 &&
                            <>
                                <Card
                                    className="br1 flex flex-column ma1 mv4 pa3"
                                >
                                    <OffWhiteSection >
                                        <Single>
                                            <MetricCard
                                                title={`Your ${edstimateCopy} for ${fake_universities[selectedIndex].title} is`}
                                                value={formatDollarsWhole(43342)}
                                                yearValue={'per year'}
                                                textColor={conceptColor.edstimate}
                                            />
                                        </Single>
                                    </OffWhiteSection>
                                    <CenterNarrow>
                                        <GenericHorizontalBarGraph
                                            data={[
                                                {
                                                    color: hexGreen,
                                                    label: edstimateCopy,
                                                    value: 43000
                                                },
                                                {
                                                    color: hexTeal,
                                                    label: 'Average Cost',
                                                    value: 36000
                                                },
                                                {
                                                    color: hexBlue,
                                                    label: 'Published Cost',
                                                    value: 70000
                                                }
                                            ]}
                                        />
                                    </CenterNarrow>
                                </Card>
                            </>
                        }
                    </div>
                </div>
            </div>
        )
    }

    if (plus_manyCollege) return unlockedWithManyCollege();
    if (unlocked) return unlockedPage();
    else if (fake_universities && fake_universities.length > 0) return pageWithCollege()
    else if (!fake_universities || fake_universities.length === 0) return pageWithoutCollege()
    else return (
        <div>

        </div>
    )
};

export default ReportPage;
