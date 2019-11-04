import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from "numeral";

import { onboardingFormPageViewModel } from './selector';

import Text from '@edmit/component-library/src/components/atoms/typography/text';
import Heading from '@edmit/component-library/src/components/atoms/typography/heading';
import { EHeadingSize } from '@edmit/component-library/src/components/atoms/typography/heading';
import Button, { EButtonSize, EButtonType } from '@edmit/component-library/src/components/atoms/button';
import Card from '@edmit/component-library/src/components/atoms/card';

import PURDUE from '../../../assets/img/PURDUE.png';
import RUTGERS from '../../../assets/img/RUTGERS.png';
import VILLANOVA from '../../../assets/img/VILLANOVA.png';
import logo1 from '../../../assets/img/logo1.png'
import logo2 from '../../../assets/img/logo2.png'
import logo3 from '../../../assets/img/logo3.png'
import logo4 from '../../../assets/img/logo4.png'
import logo5 from '../../../assets/img/logo5.png'
import chart1 from '../../../assets/img/chart1.png';
import chart2 from '../../../assets/img/chart2.png';
import chart3 from '../../../assets/img/chart3.png';
import nick from '../../../assets/img/nick.png';
import sabrina from '../../../assets/img/sabrina.png';
import mark1 from '../../../assets/img/dcu.jpg';
import grade9 from '../../../assets/img/grade-9.png';
import grade10 from '../../../assets/img/grade-10.png';
import grade11 from '../../../assets/img/grade-11.png';
import grade12 from '../../../assets/img/grade-12.png';


type UnderlineWordProps = {
  underlineWord: string,
  normalWord: string,
};
const UnderlineWord: React.SFC<UnderlineWordProps> = props => {
  return (
    <div className="flex flex-row pa2">
      <Text className="b mr1" style={{ color: '#000', borderBottom: '2px solid #921313' }}>
        {props.underlineWord}
      </Text>
      <Text className="">
        {props.normalWord}
      </Text>
    </div>
  )
}

type LevelCircleProps = {
  level: string,
  color: string,
}
const LevelCircle: React.SFC<LevelCircleProps> = props => {
  return (
    <div className="flex justify-center items-center" style={{ width: 42, height: 42, backgroundColor: props.color, borderRadius: '50%' }}>
      <span style={{ color: '#fff', fontFamily: 'Merriweather', fontSize: 21, fontWeight: 'bold' }}>{props.level}</span>
    </div>
  )
}

type DollarWithCommentProps = {
  amount: number,
  comment: string,
}
const DollarWithComment: React.SFC<DollarWithCommentProps> = props => {
  return (
    <div className="flex flex-column items-center justify-center">
      <Text className="b ma0 pa0" style={{ color: '#000', fontSize: 21 }}>
        {numeral(props.amount).format("$0,0")}
      </Text>
      <Text className="ma0 pa0" style={{ fontSize: 14 }}>
        {props.comment}
      </Text>
    </div>
  )
}

const Divider: React.SFC = () => {
  return (
    <div className="mv2" style={{ height: 2, backgroundColor: '#ededed' }} />
  )
}

type GradeCommentProps = {
  header: string,
  to: string,
}
const GradeComment: React.SFC<GradeCommentProps> = props => {
  return (
    <Card
      className="br4 flex flex-column pa3 ma1"
      style={{ boxShadow: `0 4px 12px 0 rgba(0, 0, 0, .0.9)`, width: 216 }}
    >
      <div className="flex flex-column">
        <Heading
          size={EHeadingSize.H4}
          text={props.header}
          className="ma0 tl mb2"
          style={{ fontWeight: 900, fontSize: 18 }}
        />
        <div className="flex flex-row items-center">
          <Text className="tl mv0 t-small">
            Read more
        </Text>
          <Link to={props.to} className="flex items-center justify-center" style={{ textDecoration: "none" }}>
            <i className="material-icons"
              style={{
                width: 14,
                height: 14,
                fontSize: 14,
                color: '#6f6868',
                marginLeft: 8,
              }}>open_in_new</i>
          </Link>
        </div>
      </div>
    </Card >

  )
}
export interface IOnboardingFormPageWithDataViewModel { }
type OnboardingFormPageWithDataProps = IOnboardingFormPageWithDataViewModel;

const OnboardingFormPageWithData: React.SFC<OnboardingFormPageWithDataProps> = props => {
  return (
    <div className="flex flex-column">
      {/* column - 1 */}
      <div className="w-100 flex justify-center items-center">
        <div className="ph3 pv4 pv5-l flex flex-column-reverse flex-row-l mw9 w-100" >
          <div className="fl w-100 w-50-l pa3 pt3-l flex flex-column items-center justify-start-l justify-center">
            <div className="ma2" style={{ minWidth: 280, maxWidth: 400 }}>
              <Heading
                size={EHeadingSize.H1}
                text={'Pick a College with confidence'}
                className="mv0 tl f2 f1-l"
                style={{ fontWeight: 'bold' }}
              />
              <Text className="tl mv0">
                Find a college they’ll love at a price that works. Let’s do this, together.
            </Text>
              <div className="w-100 fl flex flex-column justify-center items-center items-start-l">
                <Button
                  size={EButtonSize.Large}
                  type={EButtonType.Primary}
                  text={'Get Started'}
                  className="mt4"
                  style={{
                    width: 232,
                    height: 62,
                    borderRadius: 2
                  }}
                  onClick={() => { alert("button clicked") }}
                />
                <Text className="t-small i mt2 mb0">
                  100% Free — Sponsored by DCU
                </Text>
              </div>
            </div>
          </div>
          <div className="fl w-100 w-50-l pa3 pt4 pt3-l flex flex-column items-center justify-center">
            <Card
              className="relative br4 mb3 ph2 pv4 pa4-ns flex flex-column justify-between"
              style={{ boxShadow: `0 4px 12px 0 rgba(0, 0, 0, .0.9)` }}
            >
              <div className="br-100 absolute flex justify-center items-center"
                style={{ top: -24, left: 'calc(50% - 24px)', width: 48, height: 48, backgroundColor: '#6f6868', border: '5px solid #fff', color: '#fff' }}>
                <i className="material-icons">assessment</i>
              </div>
              <Heading
                size={EHeadingSize.H3}
                text={'Financial Grade Report'}
                className="mv0 tc"
                style={{ fontWeight: 'bold' }}
              />
              <div className="flex">
                <UnderlineWord underlineWord="3.6" normalWord="GPA" />
                <UnderlineWord underlineWord="1280" normalWord="SAT" />
                <UnderlineWord underlineWord="$90,000" normalWord="Income" />
              </div>
              <div className="flex justify-around items-center">
                <img alt="..." src={PURDUE} />
                <DollarWithComment amount={29000} comment="Per Year" />
                <LevelCircle color="#38b487" level="A" />
              </div>
              <Divider />
              <div className="flex justify-around items-center">
                <img alt="..." src={RUTGERS} />
                <DollarWithComment amount={31000} comment="Per Year" />
                <LevelCircle color="#38b487" level="A-" />
              </div>
              <Divider />
              <div className="flex justify-around items-center">
                <img alt="..." src={VILLANOVA} />
                <DollarWithComment amount={38500} comment="Per Year" />
                <LevelCircle color="#efb051" level="B+" />
              </div>
              <Divider />
            </Card>
          </div>
        </div>
      </div>
      {/* column - 2 */}
      <div style={{ backgroundColor: '#fff' }}>
        <div className="flex flex-row justify-center items-center " >
          <img alt="..." src={logo1} className="mh3 mv4" />
          <img alt="..." src={logo2} className="mh3 mv4" />
          <img alt="..." src={logo3} className="mh3 mv4 dn di-l" />
          <img alt="..." src={logo4} className="mh3 mv4 dn di-l" />
          <img alt="..." src={logo5} className="mh3 mv4 dn di-l" />
        </div>
      </div>
      {/* column - 3 */}
      <div style={{ backgroundColor: '#fff' }}>
        <div className="ma3 mv4-l" >
          <div className="flex justify-center items-center">
            <Heading
              size={EHeadingSize.H2}
              text={`See What you'll actually pay for every college on your list.`}
              className="mw7 tl tc-l ph4"
              style={{ fontWeight: 'bold' }}
            />
          </div>
          <div className="flex flex-column flex-row-l justify-center items-center items-start-l">
            <div className="flex flex-column justify-start items-center mh1 mv3 ma4-l" style={{ width: 280 }}>
              <img alt="..." src={chart1} className="ma1" />
              <div className="flex flex-column pl2">
                <Heading
                  size={EHeadingSize.H4}
                  text={`Personalize`}
                  className="mv2 tl"
                  style={{ fontWeight: 'bold' }}
                />
                <Text className="tl mv0">
                  Share a little about your family’s finances and your student’s academic merits.
              </Text>
              </div>
            </div>
            <div className="flex flex-column justify-start items-center mh1 mv3 ma4-l" style={{ width: 280 }}>
              <img alt="..." src={chart2} className="ma1" />
              <div className="flex flex-column pl2">
                <Heading
                  size={EHeadingSize.H4}
                  text={`Evaluate`}
                  className="mv2 tl"
                  style={{ fontWeight: 'bold' }}
                />
                <Text className="tl mv0">
                  View accurate financial estimates for over 1,000 universities. Find the best college at the right price — no matter your savings.
                </Text>
              </div>
            </div>
            <div className="flex flex-column justify-start items-center mh1 mv3 ma4-l" style={{ width: 280 }}>
              <img alt="..." src={chart3} className="ma1" />
              <div className="flex flex-column pl2">
                <Heading
                  size={EHeadingSize.H4}
                  text={`Make it work`}
                  className="mv2 tl"
                  style={{ fontWeight: 'bold' }}
                />
                <Text className="tl mv0">
                  Get the best price (yes, you can negotiate tuition!). Together, we’ll map out a financial plan that avoids unmanageable loan obligations.
              </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* column - 4 */}
      <div className="ma3">
        <div className="flex justify-center items-center">
          <div className="mw8 flex flex-column justify-start mv4 mv5-l" >
            <Heading
              size={EHeadingSize.H2}
              text={`We’re here to help.`}
              className="mw6 tl ma2"
              style={{ fontWeight: 'bold' }}
            />
            <Text className="tl ma2" style={{ fontFamily: 'Lato', fontSize: 21, color: '#282727' }}>
              College is one of the largest purchases we make in our lifetime — on par with buying a house or saving for retirement — yet there are few  resources available to help in this important financial decision.
            </Text>
            <Text className="tl ma2" style={{ fontFamily: 'Lato', fontSize: 21, color: '#282727' }}>
              We understand how emotional and confusing planning for and choosing a college is. That's why we left our university jobs and started Edmit.
            </Text>
            <Text className="tl ma2" style={{ fontFamily: 'Lato', fontSize: 21, color: '#282727' }}>
              We want to help you gain more control and confidence in your college investment. We think you deserve to know more than just whether a school "feels good." We want to ensure that life after graduation will be everything you want it to be financially.
            </Text>
            <Text className="tl ma2" style={{ fontFamily: 'Lato', fontSize: 21, color: '#282727' }}>
              We built Edmit to help people who don’t have time to become experts in higher education economics. It is too complicated, and too important, to start from scratch. Let us help.
            </Text>
            <div className="flex mv2">
              <img alt="..." src={nick} />
              <img alt="..." src={sabrina} />
            </div>
            <div>
              <Heading
                size={EHeadingSize.H4}
                text={`Nick and Sabrina`}
                className="tl ma1 fw9"
                style={{ fontSize: 21, color: '#282727' }}
              />
              <Text className="tl ma1" style={{ fontSize: 18 }}>
                Founders of Edmit
              </Text>
            </div>
          </div>
        </div>
      </div>
      {/* column - 5  */}
      <div style={{ backgroundColor: '#fff' }}>
        <div className="ma3 mv5-l" >
          <div className="flex justify-center items-center">
            <Heading
              size={EHeadingSize.H2}
              text={`Advice for every stage: preparing, applying, deciding, and beyond.`}
              className="mw6 tl tc-l ph4"
              style={{ fontWeight: 'bold' }}
            />
          </div>
          <div className="flex flex-column flex-row-l justify-center items-center items-start-l">
            <div className="flex flex-column justify-start items-center mv2" style={{ width: 260 }}>
              <Text className="tl ma2 t-small" style={{ fontWeight: 'bold' }}>
                9th Grade
              </Text>
              <div className="w-100 flex flex-row items-center justify-center">
                <div className="flex-grow-1 dn di-l" />
                <img alt="..." src={grade9} className="ma1" />
                <div className="flex-grow-1 dn di-l" style={{ height: 6, borderTopLeftRadius: 6, borderBottomLeftRadius: 6, backgroundColor: '#ededed' }} />
              </div>
              <div style={{ width: 6, height: 18, borderRadius: 6, backgroundColor: '#ededed' }}></div>
              <GradeComment header="How much should I save for college?" to="/" />
              <GradeComment header="How does a 529 college savings plan work?" to="/" />
            </div>
            <div className="flex flex-column justify-start items-center mv2" style={{ width: 260 }}>
              <Text className="tl ma2 t-small" style={{ fontWeight: 'bold' }}>
                10th Grade
              </Text>
              <div className="w-100 flex flex-row items-center justify-center">
                <div className="flex-grow-1 dn di-l" style={{ height: 6, borderTopRightRadius: 6, borderBottomRightRadius: 6, backgroundColor: '#ededed' }} />
                <img alt="..." src={grade10} className="ma1" />
                <div className="flex-grow-1 dn di-l" style={{ height: 6, borderTopLeftRadius: 6, borderBottomLeftRadius: 6, backgroundColor: '#ededed' }} />
              </div>
              <div style={{ width: 6, height: 18, borderRadius: 6, backgroundColor: '#ededed' }}></div>
              <GradeComment header="How much does it really cost to go to college?" to="/" />
              <GradeComment header="How to calculate a college's net price" to="/" />
            </div>
            <div className="flex flex-column justify-start items-center mv2" style={{ width: 260 }}>
              <Text className="tl ma2 t-small" style={{ fontWeight: 'bold' }}>
                11th Grade
              </Text>
              <div className="w-100 flex flex-row items-center justify-center">
                <div className="flex-grow-1 dn di-l" style={{ height: 6, borderTopRightRadius: 6, borderBottomRightRadius: 6, backgroundColor: '#ededed' }} />
                <img alt="..." src={grade11} className="ma1" />
                <div className="flex-grow-1 dn di-l" style={{ height: 6, borderTopLeftRadius: 6, borderBottomLeftRadius: 6, backgroundColor: '#ededed' }} />
              </div>
              <div style={{ width: 6, height: 18, borderRadius: 6, backgroundColor: '#ededed' }}></div>
              <GradeComment header="What types of financial aid are available?" to="/" />
              <GradeComment header="What is the FAFSA and how does it work?" to="/" />
            </div>
            <div className="flex flex-column justify-start items-center mv2" style={{ width: 260 }}>
              <Text className="tl ma2 t-small" style={{ fontWeight: 'bold' }}>
                12th Grade
              </Text>
              <div className="w-100 flex flex-row items-center justify-center">
                <div className="flex-grow-1 dn di-l" style={{ height: 6, borderTopRightRadius: 6, borderBottomRightRadius: 6, backgroundColor: '#ededed' }} />
                <img alt="..." src={grade12} className="ma1" />
                <div className="flex-grow-1 dn di-l" />
              </div>
              <div style={{ width: 6, height: 18, borderRadius: 6, backgroundColor: '#ededed' }}></div>
              <GradeComment header="How to interpret your financial aid letter" to="/" />
              <GradeComment header="How much student loan debt is too much?" to="/" />
            </div>
          </div>
        </div>
      </div>
      {/* column - 6 */}
      <div className="" style={{ backgroundColor: '#fff' }} >
        <div className="mv1 mb5-l mt3-l flex flex-row justify-center items-center">
          <div className="mw8 ma3 flex flex-column justify-center flex-row-l justify-between-l items-start">
            <div className="w-100 mt2 mt2-l flex justify-center items-center" >
              <img alt="..." src={mark1} className="" />
            </div>
            <div className="mt3 mt1-l flex flex-column justify-center items-center">
              <Heading
                size={EHeadingSize.H2}
                text={`Sponsored by DCU.`}
                className="tl ma2"
                style={{ fontWeight: 'bold' }}
              />
              <Text className="tl ma2 br1-l" style={{ fontFamily: 'Lato', fontSize: 21, color: '#282727', maxWidth: 546 }}>
                Get smart, data-driven advice you can trust with unlimited access to all of Edmit's features - including comparison reports and recommendations unique to you.
              </Text>
              <div className="w-100 ma3 fl flex flex-column justify-center items-center items-start-l">
                <Button
                  size={EButtonSize.Large}
                  type={EButtonType.Primary}
                  text={'Get Started'}
                  className="ma2"
                  style={{
                    width: 232,
                    height: 62,
                    borderRadius: 2
                  }}
                  onClick={() => { alert("button clicked") }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default connect(onboardingFormPageViewModel)(OnboardingFormPageWithData);
