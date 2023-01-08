class Chat {
  subscribeToFriendStatus(id, statusChange) {
    if (id) {
      return statusChange;
    }
  }
    unsubscribeToFriendStatus(id, statusChange) {
        if (id) {
           return null;   
      }
  }
}

export const ChatAPI = new Chat();
