import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  message: string;
  timeStamp: string;
}

interface Chat {
  [key: string]: Message;
}

interface Contact {
  userId: string;
  name: string;
  unreadCount: number;
  profilePictureURL: string;
  chat: Chat[];
}

interface ChatState {
  contacts: Contact[];
  selectedContactId: string | null;
}

const initialState: ChatState = {
  contacts: [
    {
      userId: 'user1',
      name: 'Sam',
      unreadCount: 1,
      profilePictureURL:
        '/profilePic.jpeg',
      chat: [
        {
          user1: {
            message: 'Hello',
            timeStamp: '10:40',
          },
          you: {
            message: 'Hey',
            timeStamp: '10:41',
          },
        },
        {
          user1: {
            message: 'How are you doing?',
            timeStamp: '10:41',
          },
          you: {
            message: 'Fine mate, how about you?',
            timeStamp: '10:42',
          },
        },
        {
          user1: {
            message: 'great',
            timeStamp: '10:44',
          },
          you: {
            message: "Coming to my wedding right? I don't think you confirmed.",
            timeStamp: '10:44',
          },
        },
        {
          user1: {
            message: 'Oh yes. There is no way i am going to miss that.',
            timeStamp: '10:44',
          },
          you: {
            message:
              'Awesome. See ya there. Let me know if you want me to book tickets.',
            timeStamp: '10:45',
          },
        },
      ],
    },
    {
      userId: 'user2',
      name: 'Elon',
      unreadCount: 0,
      profilePictureURL:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      chat: [
        {
          user2: {
            message: 'there?',
            timeStamp: '11:39',
          },
          you: {
            message: 'yeah, whats up?',
            timeStamp: '11:47',
          },
        },
        {
          user2: {
            message: 'movie tomorrow?',
            timeStamp: '11:49',
          },
          you: {
            message: 'Yeah sure. let me know the timings. and which movie again?',
            timeStamp: '11:52',
          },
        },
        {
          user2: {
            message: 'the new mad max movie. Reviews are great.',
            timeStamp: '11:52',
          },
          you: {
            message: 'Oh yes, i have been waiting for that one.',
            timeStamp: '11:54',
          },
        },
      ],
    },
    {
      userId: 'user3',
      name: 'Kate',
      unreadCount: 1,
      profilePictureURL:
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      chat: [
        {
          user3: {
            message: 'that burger was delicious!',
            timeStamp: '13:12',
          },
          you: {
            message: 'Oh yes, no doubt.',
            timeStamp: '13:13',
          },
        },
        {
          user3: {
            message: 'We are definitely going to that place again.',
            timeStamp: '13:13',
          },
          you: {
            message: 'we are. My mouth waters whenever drive through that area',
            timeStamp: '13:14',
          },
        },
        {
          user3: {
            message: 'haha, I bet. Lets take Tony and Natasha too next time',
            timeStamp: '13:14',
          },
          you: {
            message: 'Sure. they would love it',
            timeStamp: '13:15',
          },
        },
      ],
    },
  ],
  selectedContactId: 'user1',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectContact(state, action: PayloadAction<string>) {
      state.selectedContactId = action.payload;
      const contact = state.contacts.find(contact => contact.userId === action.payload);
      if (contact) {
        contact.unreadCount = 0;
      }
    },
    markAsUnread(state, action: PayloadAction<string>) {
      const contact = state.contacts.find(contact => contact.userId === action.payload);
      if (contact) {
        contact.unreadCount = 1;
      }
    },
    deleteConversation(state, action: PayloadAction<string>) {
      state.contacts = state.contacts.filter(contact => contact.userId !== action.payload);
    },
  },
});

export const { selectContact, markAsUnread, deleteConversation } = chatSlice.actions;
export default chatSlice.reducer;
