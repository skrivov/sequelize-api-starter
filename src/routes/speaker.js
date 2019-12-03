import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const speakers = await req.context.models.Speaker.findAll();
  return res.send(speakers);
});

router.get('/:speakerId', async (req, res) => {
  const speaker = await req.context.models.Speaker.findByPk(
    req.params.speakerId,
  );
  return res.send(speaker);
});

router.post('/', async (req, res) => {
  const speaker = await req.context.models.Speaker.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    bio: req.body.bio,
  });

  return res.send(speaker);
});

router.delete('/:speakerId', async (req, res) => {
  const result = await req.context.models.Speaker.destroy({
    where: { id: req.params.speakerId },
  });

  return res.send(true);
});

export default router;
