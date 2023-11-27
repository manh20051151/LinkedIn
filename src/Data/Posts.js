import Images from "../Utils/Images";

export default Posts = [
  {
    id: 9,
    profile_picture: Images.USERS.USER9,
    name: "Cristiano Ronaldo",
    title: "100K+ followers | Influencer",
    timeAgo: 23, // hrs
    connection: '2nd', // which connection it is - 1st, 2nd, 3rd
    content: 'Aliqua fugiat amet sunt consequat cupidatat duis pariatur.',
    hasImage: false, // hasImage or not
    shares: 1, // share count
    comments: 0,
    likes: 17, // like count
    isLiked: true, // is liked by current user or not
    baner: Images.BANNERS.BANNER9,
  },
  {
    id: 1,
    profile_picture: Images.USERS.USER1,
    name: "Lionel Messi",
    title: "SDE-1 @Google || Full Stack Developer",
    timeAgo: 2, // hrs
    connection: '1st', // which connection it is - 1st, 2nd, 3rd & handle the follow button with this param only.
    content: 'In commodo eu nulla duis adipisicing proident Lorem qui incididunt est nulla magna officia. Minim voluptate adipisicing esse dolor proident cupidatat nostrud. Veniam consectetur adipisicing do reprehenderit esse elit commodo sit veniam. Cupidatat deserunt ipsum deserunt cupidatat sint occaecat irure minim. Veniam id reprehenderit quis anim Lorem ipsum. Proident pariatur laborum est proident ea culpa occaecat sunt ullamco. Nisi est sint laboris mollit nisi tempor.',
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST1,
    shares: 5, // share count
    comments: 0,
    likes: 156, // like count
    isLiked: false, // is liked by current user or not
    baner: Images.BANNERS.BANNER1,
  },
  
  {
    id: 3,
    profile_picture: Images.USERS.USER3,
    name: "Kylian Mbappé",
    title: "Engineer at MS Technologies",
    timeAgo: 1, // hrs
    content: 'Enim et excepteur esse cupidatat nulla. Cillum eiusmod ipsum ipsum velit culpa nulla consequat veniam magna. Irure consectetur proident commodo ipsum dolore eiusmod sit consequat do proident. Ea Lorem et quis anim enim excepteur velit.',
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST2,
    shares: 185, // share count
    comments: 0,
    likes: 11556, // like count
    isLiked: false,
    baner: Images.BANNERS.BANNER13,
  },
  {
    id: 6,
    profile_picture: Images.USERS.USER6,
    name: "Elon Musk",
    title: "50K+ Linkedin followers",
    timeAgo: 6, // hrs
    connection: '1st', // which connection it is - 1st, 2nd, 3rd
    content: 'Ut deserunt nulla tempor incididunt pariatur veniam id consectetur duis reprehenderit sit. Sit ad in laborum voluptate anim Lorem ullamco quis occaecat excepteur sunt do velit qui. Ea officia aliqua sit eu sit. Mollit ipsum sit proident reprehenderit dolor veniam nisi aliquip enim.',
    hasImage: false,
    shares: 37, // share count
    comments: 0,
    likes: 856, // like count
    isLiked: false, // is liked by current user or not
    baner: Images.BANNERS.BANNER6,
  },
  {
    id: 7,
    profile_picture: Images.USERS.USER7,
    name: "Mark Zuckerberg",
    title: "Chemical Engineer",
    timeAgo: 10, // hrs
    content: 'Dolore elit sit excepteur pariatur do. Elit ipsum aute duis duis ut. Consectetur aliquip sunt ea aute aute cillum non. Ut adipisicing pariatur sit excepteur.',
    hasImage: false,
    shares: 7, // share count
    comments: 0,
    likes: 590, // like count
    isLiked: false, // is liked by current user or not
    baner: Images.BANNERS.BANNER7,
  },
  {
    id: 4,
    profile_picture: Images.USERS.USER4,
    name: "Nike",
    title: "Senior Software Developer",
    timeAgo: 20, // hrs
    connection: '3rd', // which connection it is - 1st, 2nd, 3rd
    content: 'Ex velit elit mollit magna sit ullamco consequat sint occaecat occaecat excepteur ex sunt. Consectetur irure duis magna Lorem sit. Non ad ipsum dolor irure sit officia elit aute sit nisi laborum id.',
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST3,
    shares: 0, // share count
    comments: 0,
    likes: 10, // like count
    isLiked: false, // is liked by current user or not
    baner: Images.BANNERS.BANNER4,
  },
  {
    id: 5,
    profile_picture: Images.USERS.USER5,
    name: "YouTube",
    title: "Heading Marketing @Ola",
    timeAgo: 16, // hrs
    connection: '2nd', // which connection it is - 1st, 2nd, 3rd
    content: '',
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST4,
    shares: 187, // share count
    comments: 0,
    likes: 1500, // like count
    isLiked: false, // is liked by current user or not
    baner: Images.BANNERS.BANNER5,
  },
  {
    id: 8,
    profile_picture: Images.USERS.USER8,
    name: "Netflix",
    title: "SDE-1 @Meta || AI\ML",
    timeAgo: 12, // hrs
    content: 'Aute laborum duis sint ex enim dolor dolore minim. Nulla laborum duis voluptate nostrud dolore ipsum reprehenderit laboris duis aliqua id esse in cillum. Non culpa id consequat commodo non est fugiat occaecat sunt sint sit ipsum. Consequat nisi ipsum ut officia et cillum cupidatat dolore. Et ex nulla et laborum veniam eiusmod incididunt et sint Lorem in culpa.',
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST5,
    shares: 0, // share count
    comments: 0,
    likes: 0, // like count
    isLiked: false, // is liked by current user or not
    baner: Images.BANNERS.BANNER8,
  },
  {
    id: 2,
    profile_picture: Images.USERS.USER2,
    baner: Images.BANNERS.BANNER1,
    name: "Spotify",
    title: "Student at KMS College of Engineering",
    timeAgo: 4, // hrs
    connection: '2nd', // which connection it is - 1st, 2nd, 3rd
    content: 'Nostrud cupidatat veniam Lorem ipsum tempor. Cupidatat eiusmod voluptate veniam tempor consequat mollit.',
    hasImage: false, // hasImage or not
    shares: 2, // share count
    comments: 0,
    likes: 10, // like count
    isLiked: true, // is liked by current user or not
    baner: Images.BANNERS.BANNER2,
  },
  {
    id: 10,
    profile_picture: Images.USERS.USER10,
    name: "Meta",
    title: "Looking for a job",
    timeAgo: 19, // hrs
    connection: '2nd', // which connection it is - 1st, 2nd, 3rd
    content: 'Proident aliqua Lorem elit duis pariatur et magna nisi id mollit. Irure mollit reprehenderit nulla cupidatat eu nulla ex adipisicing do commodo. Est nostrud labore tempor deserunt ex consequat aliqua dolore. Pariatur magna quis non in. Nostrud incididunt duis irure excepteur irure nulla. Ea incididunt commodo qui ut et consequat duis quis anim aliquip. Velit in nisi excepteur eu laboris occaecat minim mollit consequat sit. Esse sunt sint enim Lorem et laborum laboris aliquip fugiat duis elit ipsum consectetur sit. In nostrud anim excepteur commodo culpa minim proident ad.',
    hasImage: false, // hasImage or not
    shares: 10, // share count
    comments: 0,
    likes: 67, // like count
    isLiked: true, // is liked by current user or not
    baner: Images.BANNERS.BANNER10,
  },
  {
    id: 11,
    profile_picture: Images.USERS.USER11,
    name: "Grab",
    title: "CEO @K.V. Solutions",
    timeAgo: 1, // hrs
    content: '',
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST6,
    shares: 50, // share count
    comments: 0,
    likes: 8651, // like count
    isLiked: false, // is liked by current user or not
    baner: Images.BANNERS.BANNER11,
  },
  {
    id: 12,
    profile_picture: Images.USERS.USER13,
    name: "The Coca-Cola",
    title: "Founder P.S Software Solutions",
    timeAgo: 8, // hrs
    connection: '1st', // which connection it is - 1st, 2nd, 3rd
    content: 'Sint consequat fugiat elit magna deserunt sit ut et dolor aute adipisicing elit occaecat qui. Sint labore quis sint veniam id adipisicing commodo nulla non nisi fugiat consectetur officia proident. Nisi mollit nostrud nostrud ut sit anim aute Lorem.',
    hasImage: false,
    shares: 45, // share count
    comments: 0,
    likes: 1625, // like count
    isLiked: true, // is liked by current user or nots
    baner: Images.BANNERS.BANNER13,
  },
  //------------------------------
  {
    id: 16,
    profile_picture: Images.USERS.USER17,
    name: "VNG Corporation",
    title: "42,500 folwers",
    timeAgo: 2, // hrs
    //connection: '1st', // which connection it is - 1st, 2nd, 3rd
    content: "VNG IS HONORED TO BE RECOGNIZED AS THE 2023 INSPIRATIONAL BRAND AWARD",
    hasImage: true,
    postImage: Images.POSTS.POST10,
    shares: 99, // share count
    comments: 0,
    likes: 1999, // like count
    isLiked: false, // is liked by current user or nots
    baner: Images.BANNERS.BANNER15,
  },
  {
    id: 14,
    profile_picture: Images.USERS.USER15,
    name: "Zalo",
    title: "54,863 followers",
    timeAgo: 1, // hrs
    //connection: '1st', // which connection it is - 1st, 2nd, 3rd
    content: "#ZaloCultureCode | Qua nhiều số Zalo Internal Talk, bên cạnh tinh thần học hỏi và chia sẻ mà chương trình mang lại, chắc chắn mỗi thành viên tham dự đều mang về cho mình những giá trị và cảm nhận riêng.",
    hasImage: true,
    postImage: Images.POSTS.POST8,
    shares: 63, // share count
    comments: 0,
    likes: 756, // like count
    isLiked: false, // is liked by current user or nots
    baner: Images.BANNERS.BANNER15,
  },

  {
    id: 15,
    profile_picture: Images.USERS.USER16,
    name: "Vinamilk",
    title: "64,500 folwers",
    timeAgo: 2, // hrs
    //connection: '1st', // which connection it is - 1st, 2nd, 3rd
    content: "Vinamilk hẹn gặp bạn tại Ngày hội việc làm Đại học Bách Khoa TP. Hồ Chí Minh!Đến ngay khu vực triển lãm của Vinamilk tại gian hàng 92-93-94",
    hasImage: true,
    postImage: Images.POSTS.POST9,
    shares: 98, // share count
    comments: 0,
    likes: 1321, // like count
    isLiked: false, // is liked by current user or nots
    baner: Images.BANNERS.BANNER15,
  },

  {
    id: 13,
    profile_picture: Images.USERS.USER14,
    name: "The HEINEKEN Company",
    title: "1,979,367 followers",
    timeAgo: 1, // hrs
    //connection: '1st', // which connection it is - 1st, 2nd, 3rd
    content: "Zero alcohol beer taps into the growing trend of mindful drinking.Heineken®0.0, the world's no.1 non-alcoholic beer is available in 110 countries and counting. Our aim is to empower consumers to select the right beverage for the right occasion, everywhere and at any time of day.",
    hasImage: true,
    postImage: Images.POSTS.POST7,
    shares: 85, // share count
    comments: 0,
    likes: 2735, // like count
    isLiked: false, // is liked by current user or nots
    baner: Images.BANNERS.BANNER14,
  },
]