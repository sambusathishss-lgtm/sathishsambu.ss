let isFollowing = false;

function toggleFollow() {
    const followButton = document.getElementById('followButton');
    const followerCountElement = document.getElementById('follower-count');
    let followerCount = parseInt(followerCountElement.textContent.replace(',', '')); // Remove comma from the count

    if (!isFollowing) {
        followButton.textContent = 'Following';
        followerCount++;
        followerCountElement.textContent = followerCount.toLocaleString(); // Add comma to the count
        isFollowing = true;
    } else {
        followButton.textContent = 'Follow';
        followerCount--;
        followerCountElement.textContent = followerCount.toLocaleString(); // Add comma to the count
        isFollowing = false;
    }
}