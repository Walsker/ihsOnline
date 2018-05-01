import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {containerStyle} from 'ihsOnline/src/components/common/appStyles';
import DailyMessage from 'ihsOnline/src/components/common/dayWhat/dailyMessage';
import Date from 'ihsOnline/src/components/common/dayWhat/date';
import DayLetter from 'ihsOnline/src/components/common/dayWhat/dayLetter';
import EventList from 'ihsOnline/src/components/common/events/eventList';
import ActionBar from 'ihsOnline/src/components/common/actionBar';

export default class DayWhatPage extends Component
{
    render()
    {
        return(
            <View style = {containerStyle.default}>
                <ActionBar centerComponent = {<Date/>}/>
                <ScrollView>
                    <DailyMessage/>
                    <View style = {containerStyle.page}>
                        <DayLetter/>
                    </View>
                    <EventList/>
                </ScrollView>
            </View>
        );
    }
}