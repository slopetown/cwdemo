const memberService = require('../api/member');

function searchMembers(req, res) {
  const members = memberService.searchMembers();
  res.json(members);
}

function registerMember(req, res) {
  const newMember = memberService.registerMember(req.body);
  res.json(newMember);
}

function updateMember(req, res) {
  const updatedMember = memberService.updateMember(req.params.id, req.body);
  if (updatedMember) {
    res.json(updatedMember);
  } else {
    res.status(404).json({ message: 'Member not found' });
  }
}

function deleteMember(req, res) {
  const deletedMember = memberService.deleteMember(req.params.id);
  if (deletedMember) {
    res.json({ message: 'Member deleted successfully' });
  } else {
    res.status(404).json({ message: 'Member not found' });
  }
}

module.exports = {
  searchMembers,
  registerMember,
  updateMember,
  deleteMember,
};
