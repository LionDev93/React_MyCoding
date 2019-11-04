import * as React from 'react';

import CollegeCard from '../college-card';
import Heading, { EHeadingSize } from '@edmit/component-library/src/components/atoms/typography/heading';
import { EEdmitColor } from '@edmit/component-library/src/lib/colors';
import Text from '@edmit/component-library/src/components/atoms/typography/text';
import TextLink from '@edmit/component-library/src/components/atoms/link-text';
import FilterMenu from '@edmit/component-library/src/components/molecules/filter-menu';
import ToggleButton from '@edmit/component-library/src/components/atoms/toggle-button';
import FormFieldSelect from '@edmit/component-library/src/components/atoms/form/form-field-select';
import SmartHighSchoolField from '../../../../connectors/molecules/smart-fields/field-highschool';
import SmartGPAField from '../../../../connectors/molecules/smart-fields/field-gpa';
import SmartSATField from '../../../../connectors/molecules/smart-fields/field-sat';
import SmartACTField from '../../../../connectors/molecules/smart-fields/field-act';

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


export interface ICollegeRecommendationViewModel {
}

type CollegeRecommendationProps = ICollegeRecommendationViewModel;


const featureIds = {
    REGION_MIDWEST: '77D840A1-A3DC-4541-B229-95328EC12F93'.toLowerCase(),
    REGION_NORTHEAST: '7505FBC1-C9F5-45BB-8269-429F2F6A0A7B'.toLowerCase(),
    REGION_SOUTH: 'F460DD60-82D3-4B48-8895-0755D5F9B788'.toLowerCase(),
    REGION_WEST: '548DBD0D-D7E1-42C5-99F5-CF0A13765347'.toLowerCase(),
    SIZE_10000_TO_20000: '53BB201E-D25A-4B77-97BE-E7BFDB3BF849'.toLowerCase(),
    SIZE_1000_TO_5000: 'A5E3462E-930A-4D0E-B992-13346E87930D'.toLowerCase(),
    SIZE_5000_TO_10000: 'C7756CDA-B48B-4E34-884C-EADC279A4580'.toLowerCase(),
    SIZE_ABOVE_20000: '64B3E714-8141-42C3-B9C1-34441FEBBCA6'.toLowerCase(),
    SIZE_UNDER_1000: '1827C86A-828C-4026-999B-F3E5A1B51A59'.toLowerCase(),
    TYPE_PRIVATE: '9D8B32AB-8558-48D7-AF93-2C3ADC4680DD'.toLowerCase(),
    TYPE_PUBLIC: '72DB5883-7FD1-4A5C-A1BB-69F83AC232C6'.toLowerCase()
};


const CollegeRecommendation: React.FC<CollegeRecommendationProps> = props => {
    const [features, setFeatures] = React.useState([""]);
    const onChangeFeature = (featureId: string) => {
        for (var i = 0; i < features.length; i++) {
            if (featureId === features[i]) {
                features.splice(i, 1);
                setFeatures(features.filter(value => true))
                return;
            }
        }
        features.push(featureId);
        setFeatures(features.filter(value => true))
    }
    const isSelectedFeature = (featureId: string) => {
        for (var i = 0; i < features.length; i++) {
            if (featureId === features[i]) {
                return true;
            }
        }
        return false;
    }

    const RecommendationPage = () => {
        return (
            <div className="flex flex-column ph4 pv3" style={{ maxWidth: 800 }}>
                {/* <div className="w-100" style={{ maxWidth: 740 }}> */}
                <div className="flex flex-column">
                    <Heading
                        size={EHeadingSize.H2}
                        text="College Recommendations"
                        className="tl mv2"
                        style={{ fontWeight: 900 }}
                    />
                    <Text className={'mv0'}>
                        Recommendations are based on your personalized financial grade.<br />
                        <TextLink className={'mv0'} to={'#'} onClick={() => { }}>
                            Update your profile
                        </TextLink>
                        {' '} to improve your recommendations.
                    </Text>
                </div>
                {/* Filters */}
                <div className="mv3">
                    <Text className="t-small mh1" style={{ fontSize: 10, opacity: 0.75 }}>
                        FILTERS
                    </Text>
                    <div className="flex flex-row flex-wrap mw7">
                        <FilterMenu feature={'Size'} active={false} onApply={() => null} onUpgradeToEdmitPlus={() => { }}>
                            <ToggleButton selected={isSelectedFeature(featureIds.SIZE_UNDER_1000)} onToggle={() => { onChangeFeature(featureIds.SIZE_UNDER_1000) }} className={"ma1"}>Under 1000 students</ToggleButton>
                            <ToggleButton selected={isSelectedFeature(featureIds.SIZE_1000_TO_5000)} onToggle={() => { onChangeFeature(featureIds.SIZE_1000_TO_5000) }} className={"ma1"}>1,000 to 5,000 students</ToggleButton>
                            <ToggleButton selected={isSelectedFeature(featureIds.SIZE_5000_TO_10000)} onToggle={() => { onChangeFeature(featureIds.SIZE_5000_TO_10000) }} className={"ma1"}>5,000 to 10,000 students</ToggleButton>
                            <ToggleButton selected={isSelectedFeature(featureIds.SIZE_10000_TO_20000)} onToggle={() => { onChangeFeature(featureIds.SIZE_10000_TO_20000) }} className={"ma1"}>10,000 to 20,000 students</ToggleButton>
                            <ToggleButton selected={isSelectedFeature(featureIds.SIZE_ABOVE_20000)} onToggle={() => { onChangeFeature(featureIds.SIZE_ABOVE_20000) }} className={"ma1"}>Above 20,000 students</ToggleButton>
                        </FilterMenu>
                        <FilterMenu feature={'Region'} active={true} onApply={() => { }} onUpgradeToEdmitPlus={() => { }}>
                            <ToggleButton selected={isSelectedFeature(featureIds.REGION_MIDWEST)} onToggle={() => { onChangeFeature(featureIds.REGION_MIDWEST) }} className={"ma1"}>North</ToggleButton>
                            <ToggleButton selected={isSelectedFeature(featureIds.REGION_NORTHEAST)} onToggle={() => { onChangeFeature(featureIds.REGION_NORTHEAST) }} className={"ma1"}>East</ToggleButton>
                            <ToggleButton selected={isSelectedFeature(featureIds.REGION_SOUTH)} onToggle={() => { onChangeFeature(featureIds.REGION_SOUTH) }} className={"ma1"}>West</ToggleButton>
                            <ToggleButton selected={isSelectedFeature(featureIds.REGION_WEST)} onToggle={() => { onChangeFeature(featureIds.REGION_WEST) }} className={"ma1"}>South</ToggleButton>
                        </FilterMenu>
                        <FilterMenu feature={'Public/Private'} active={false} onApply={() => { }} onUpgradeToEdmitPlus={() => { }}>
                            <Text className={"mt0"}>Do you have a preference for public or private?</Text>
                            <ToggleButton selected={isSelectedFeature(featureIds.TYPE_PUBLIC)} className={"ma1"} onToggle={() => { onChangeFeature(featureIds.TYPE_PUBLIC) }}>Public</ToggleButton>
                            <ToggleButton selected={isSelectedFeature(featureIds.TYPE_PRIVATE)} className={"ma1"} onToggle={() => { onChangeFeature(featureIds.TYPE_PRIVATE) }}>Private</ToggleButton>
                        </FilterMenu>
                        <FilterMenu feature={'Major'} active={true} onApply={() => null} onUpgradeToEdmitPlus={() => { }}>
                            <Text className={"mt0"}>Do you know what you want to study?</Text>
                            <Text className={"i"}>It’s ok if you don’t.</Text>
                            <FormFieldSelect
                                required={false}
                                value={undefined}
                                onSelect={id => { }}
                                className={'mw5'}
                                barStyle
                            >
                                <option selected={true} key={-1} value={""}>
                                    Select a major
                                </option>
                                <option key={1} value={1}>
                                    {"1"}
                                </option>
                                <option key={2} value={2}>
                                    {"2"}
                                </option>
                            </FormFieldSelect>
                        </FilterMenu>
                        <FilterMenu feature={'Popular at My High School'} active={false} onApply={() => null} onUpgradeToEdmitPlus={() => { }}>
                            <SmartHighSchoolField />
                        </FilterMenu>
                        <FilterMenu feature={'Test Scores'} active={true} onApply={() => null} onUpgradeToEdmitPlus={() => { }}>
                            <div className={'flex flex-wrap'}>
                                <div className={'w-100 w-33-ns ph2 mb4 mb2-ns tc'}>
                                    <SmartGPAField className={'mb2'} />
                                </div>
                                <div className={'w-100 w-33-ns ph2 mb4 mb2-ns tc'}>
                                    <SmartSATField className={'mb2'} />
                                </div>
                                <div className={'w-100 w-33-ns ph2 mb2 tc'}>
                                    <SmartACTField className={'mb2'} />
                                </div>
                            </div>
                            <Text>Your test scores are used to sort for schools where you would be competitive.</Text>
                        </FilterMenu>
                        <FilterMenu feature={'Scholarships & Aid'} locked={true} active={false} onApply={() => null} onUpgradeToEdmitPlus={() => { }}>
                        </FilterMenu>
                        <FilterMenu feature={'Edstimate'} locked={true} active={false} onApply={() => null} onUpgradeToEdmitPlus={() => { }}>
                        </FilterMenu>
                    </div>
                </div>
                {/* divider */}
                <div className="mv3" style={{ height: 1, backgroundColor: '#c9c9c9', opacity: 0.5 }} />

                {/* University Card List */}
                <div className="mt2">
                    <CollegeCard className="mv3" />
                    <CollegeCard className="mv3" />
                    <CollegeCard className="mv3" />
                    <CollegeCard className="mv3" />
                </div>
            </div >
        )
    }
    return (
        <>
            {RecommendationPage()}
        </>
    )
};

export default CollegeRecommendation;
