import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  let Speaker = req.context.models.Speaker;
  const sessions = await req.context.models.Session.findAll({ 
    include: [{
      model: Speaker, as: 'Speaker'  
    }]
  });
  return res.send(sessions);
});

router.get('/:sessionId', async (req, res) => {
  const session = await req.context.models.Session.findByPk(
    req.params.sessionId,
  );
  return res.send(session);
});

router.post('/', async (req, res) => {
  const session = await req.context.models.Session.create({
    title: req.body.firstName,
    time: req.body.lastName,
    description: req.body.bio,
  });

  return res.send(session);
});

router.delete('/:sessionId', async (req, res) => {
  const result = await req.context.models.Session.destroy({
    where: { id: req.params.sessionId },
  });

  return res.send(true);
});

export default router;
