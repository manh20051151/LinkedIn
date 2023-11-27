import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React,  { useState, useEffect } from 'react';
import Colors from '../Utils/Colors';
import Jobs from '../Data/Jobs';
import ShowJobs from '../Components/ShowJobs';
import ItemSeparator from '../Components/ItemSeparator';
import Footer from '../Components/Footer';
import Images from '../Utils/Images';
import CustomIcon from '../Components/CustomIcon';
import Icon from 'react-native-vector-icons/Entypo'
export default function Job() {
  const [showAllJobs, setShowAllJobs] = useState(false);

  const handleShowAllJobs = () => {
    if (showAllJobs) {
      // Nếu đã hiển thị tất cả, chỉ hiển thị 2 công việc ban đầu khi nhấn lại
      setJobsToShow(Jobs.slice(0, 2));
    } else {
      // Hiển thị tất cả công việc
      setJobsToShow(Jobs);
    }
    setShowAllJobs(!showAllJobs); // Đảo ngược trạng thái hiển thị tất cả công việc
  };
  const [jobsToShow, setJobsToShow] = useState(Jobs); // Jobs là danh sách công việc ban đầu

  // Function to update
  useEffect(() => {
    if (showAllJobs) {
      setJobsToShow(Jobs); // Hiển thị tất cả công việc
    } else {
      // Hiển thị chỉ 2 công việc ban đầu
      const initialJobs = Jobs.slice(0, 2);
      setJobsToShow(initialJobs);
    }
  }, [showAllJobs]);

  const Premium = () => (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        paddingVertical: 16,
      }}>
      <Image
        source={Images.PROFILE_PICTURE}
        style={{height: 60, width: 60, borderRadius: 100, marginHorizontal: 16}}
      />
      <View style={{width: 275}}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: Colors.BLACK}}>
          Try premium to see the jobs where you would be a top participant
        </Text>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: Colors.DARK_YELLOW,
            borderRadius: 100,
            paddingHorizontal: 16,
            paddingVertical: 5,
            alignSelf: 'flex-start',
            marginVertical: 7,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.BLACK}}>
            Try premium for 1 month
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <CustomIcon name="ellipsis-vertical" size={25} color={Colors.BLACK} />
      </TouchableOpacity>
    </View>
  );

  const LikeDisLike = () => (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        marginVertical: 10,
        padding: 10,
        flexDirection: 'row',
        
      }}>
      <View style = {{width: 280}}>
        <Text style={{fontSize: 19, fontWeight: 'bold', color: Colors.BLACK}}>
          Are these jobs right for you?
        </Text>
        <Text style={{fontSize: 17, color: Colors.GRAY}}>
          We eill use your feedback to improve the recomendations
        </Text>
      </View>
      <Icon name='thumbs-up' size= {31} color ={Colors.BLACK} style = {{marginRight: 10}} />
      <Icon name='thumbs-down' size= {31} color ={Colors.BLACK} style = {{marginRight: 10}} />
    </View>
  );

  const RecommendedJobs  = () =>(
    <View
    style={{flex: 1, backgroundColor: Colors.WHITE, marginVertical: 10}}>
    <Text
      style={{
        color: Colors.BLACK,
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginBottom: 16,
        paddingTop: 10,
      }}>
      Recomended for you
    </Text>
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={jobsToShow}
      renderItem={({item}) => <ShowJobs item={item} />}
      ItemSeparatorComponent={() => <ItemSeparator></ItemSeparator>}
      ListFooterComponent={() => <Footer onPressShowAll={handleShowAllJobs}></Footer>}
    />
  </View>
    )
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={{flex: 1}}>
      <RecommendedJobs jobsToShow={jobsToShow} handleShowAllJobs={handleShowAllJobs} />
      <Premium />
      <LikeDisLike />
    </ScrollView>
  );
}
