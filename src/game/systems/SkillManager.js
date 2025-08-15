export class SkillManager {
  constructor(game) {
    this.game = game;
    this.skills = [];
  }

  addSkill(skill) {
    this.skills.push(skill);
    console.log(`Skill added: ${skill.constructor.name}`);
  }

  update(deltaTime, entities) {
    for (const skill of this.skills) {
      skill.update(deltaTime, entities);
    }
  }

  render(renderer) {
    for (const skill of this.skills) {
      skill.render(renderer);
    }
  }

  reset() {
    this.skills = [];
  }
}
