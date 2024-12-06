const members = [];

function searchMembers() {
  return members;
}

function registerMember(member) {
  const newMember = { id: members.length + 1, ...member };
  members.push(newMember);
  return newMember;
}

function updateMember(id, updatedInfo) {
  const memberIndex = members.findIndex((member) => member.id === id);
  if (memberIndex !== -1) {
    members[memberIndex] = { ...members[memberIndex], ...updatedInfo };
    return members[memberIndex];
  }
  return null;
}

function deleteMember(id) {
  const memberIndex = members.findIndex((member) => member.id === id);
  if (memberIndex !== -1) {
    const deletedMember = members.splice(memberIndex, 1);
    return deletedMember[0];
  }
  return null;
}

module.exports = {
  searchMembers,
  registerMember,
  updateMember,
  deleteMember,
};
